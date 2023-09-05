import { router, useSegments } from 'expo-router'
import { type ReactNode, createContext, useContext, useEffect, useState, FC } from 'react'
import { type Auth, type AuthInfo } from 'lib/auth'

interface User {
  name: string
}

interface AuthContextShape {
  signIn: (props: { name: string; email: string }) => Promise<void>
  signOut: () => Promise<void>
  user: User | null
}

const defaultAuthContext: AuthContextShape = {
  signIn: async () => {
    Promise.resolve()
  },
  signOut: async () => {
    Promise.resolve()
  },
  user: null,
}

const AuthContext = createContext<AuthContextShape>(defaultAuthContext)

export const useAuth = () => useContext(AuthContext)

const useProtectedRoute = (user: User | null) => {
  const segments = useSegments()

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      router.replace('/sign-in')
    } else if (user && inAuthGroup) {
      router.replace('/')
    }
  }, [user, segments])
}

interface AuthProviderProps {
  auth: Pick<Auth, 'signIn' | 'signOut'>
  children: ReactNode
  value: {
    authInfo?: AuthInfo
    signedIn: boolean
  }
}

export const AuthProvider = ({ auth, children, value: { signedIn } }: AuthProviderProps) => {
  const u: User | null = signedIn ? { name: '-' } : null
  const [user, setUser] = useState<User | null>(u)

  useProtectedRoute(user)

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, name }) => {
          await auth.signIn({ method: 'email', email })
          setUser({ name })
        },
        signOut: async () => {
          await auth.signOut()
          setUser(null)
        },
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}