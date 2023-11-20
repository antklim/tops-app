import { router, useSegments } from 'expo-router'
import { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { type Auth } from 'src/lib/auth'
import { clearProfile, setProfile } from 'src/lib/profile'

interface AuthContextShape {
  signIn: (props: { name: string; email: string }) => Promise<void>
  signOut: () => Promise<void>
  signedIn: boolean
}

const defaultAuthContext: AuthContextShape = {
  signIn: async () => {
    Promise.resolve()
  },
  signOut: async () => {
    Promise.resolve()
  },
  signedIn: false,
}

const AuthContext = createContext<AuthContextShape>(defaultAuthContext)

export const useAuth = () => useContext(AuthContext)

const useProtectedRoute = (signedIn: boolean) => {
  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!signedIn && !inAuthGroup) {
      router.replace('/sign-in')
    } else if (signedIn && inAuthGroup) {
      router.replace('/(root)')
    }
  }, [signedIn, segments])
}

interface AuthProviderProps {
  auth: Pick<Auth, 'signIn' | 'signOut'>
  children: ReactNode
  signedIn: boolean
}

export const AuthProvider = ({ auth, children, signedIn }: AuthProviderProps) => {
  const [ctxSignedIn, setCtxSignedIn] = useState(signedIn)

  useProtectedRoute(ctxSignedIn)

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, name }) => {
          await auth.signIn({ method: 'email', email })
          await setProfile({ name })
          setCtxSignedIn(true)
        },
        signOut: async () => {
          await auth.signOut()
          await clearProfile()
          setCtxSignedIn(false)
        },
        signedIn: ctxSignedIn,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
