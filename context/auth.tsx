import { router, useSegments } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from 'lib/auth'

const authProvider = auth()

interface User {
  name: string
}

interface AuthContextShape {
  signIn: (props: { name: string; email: string }) => Promise<void>
  signOut: () => Promise<void>
  user?: User
}

const defaultAuthContext: AuthContextShape = {
  signIn: async () => {
    Promise.resolve()
  },
  signOut: async () => {
    Promise.resolve()
  },
}

const AuthContext = createContext<AuthContextShape>(defaultAuthContext)

export const useAuth = () => useContext(AuthContext)

const useProtectedRoute = (user?: User) => {
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

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User>()

  useProtectedRoute(user)

  return (
    <AuthContext.Provider
      value={{
        signIn: async ({ email, name }) => {
          await authProvider.login({ method: 'email', email })
          setUser({ name })
        },
        signOut: async () => {
          await authProvider.logout()
          setUser(undefined)
        },
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
