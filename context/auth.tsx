import { router, useSegments } from 'expo-router'
import React from 'react'

interface AuthContextShape {
  signIn: () => void
  signOut: () => void
  user: unknown
}

const defaultAuthContext: AuthContextShape = {
  signIn: () => {},
  signOut: () => {},
  user: null
}

const AuthContext = React.createContext<AuthContextShape>(defaultAuthContext)

export const useAuth = () => React.useContext(AuthContext)

const useProtectedRoute = (user: unknown) => {
  const segments = useSegments()

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      router.replace('/sign-in')
    } else if (user && inAuthGroup) {
      router.replace('/')
    }

  }, [user, segments])
}

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = React.useState<{} | null>(null)

  useProtectedRoute(user)

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setUser({}),
        signOut: () => setUser(null),
        user
      }}>
      {children}
    </AuthContext.Provider>
  )
}
