import { router, useSegments } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'
import { type UserInfo, auth } from 'lib/auth'

const authProvider = auth()

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

  // TODO: check if user is logged in with authProvider
  // If logged in then set user and redirect to home

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
  children: any
  value: {
    signedIn: boolean
    userInfo?: UserInfo
  }
}

export const AuthProvider = ({ children, value: { signedIn } }: AuthProviderProps) => {
  const u: User | null = signedIn ? { name: '-' } : null
  const [user, setUser] = useState<User | null>(u)

  useProtectedRoute(user)

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, name }) => {
          await authProvider.signIn({ method: 'email', email })
          setUser({ name })
        },
        signOut: async () => {
          await authProvider.signOut()
          setUser(null)
        },
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
