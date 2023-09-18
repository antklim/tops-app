import { ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from 'context/auth'
import { ProfileProvider } from 'context/profile'
import { auth as authFactory, useAuthInfo } from 'lib/auth'
import { DarkTheme, LightTheme } from 'ui/theme'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const auth = authFactory()

SplashScreen.preventAutoHideAsync()

interface LayoutProps {
  signedIn: boolean
}

const Layout = ({ signedIn }: LayoutProps) => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider value={theme}>
      <AuthProvider auth={auth} signedIn={signedIn}>
        <ProfileProvider>
          <SafeAreaProvider>
            {auth.Component && <auth.Component />}
            <Slot />
          </SafeAreaProvider>
        </ProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

const AppLayout = () => {
  const { signedIn, loaded, error } = useAuthInfo(auth)

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return <SafeAreaProvider>{auth.Component && <auth.Component />}</SafeAreaProvider>

  return <Layout signedIn={signedIn} />
}

export default AppLayout
