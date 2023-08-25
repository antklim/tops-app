import { router, useSegments } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  name: string
}

interface AuthContextShape {
  signIn: () => void
  signOut: () => void
  user?: User
}

const defaultAuthContext: AuthContextShape = {
  signIn: () => {},
  signOut: () => {},
}

const AuthContext = createContext<AuthContextShape>(defaultAuthContext)

export const useAuth = () => useContext(AuthContext)

const useProtectedRoute = (user?: User) => {
  const segments = useSegments()

  console.log('useProtectedRoute > segments', segments)

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      console.log('useProtectedRoute > redirecting to /sign-in')
      router.replace('/sign-in')
    } else if (user && inAuthGroup) {
      console.log('useProtectedRoute > redirecting to /')
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
        signIn: () => setUser({ name: 'John Doe' }),
        signOut: () => setUser(undefined),
        user
      }}>
      {children}
    </AuthContext.Provider>
  )
}
