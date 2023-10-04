import { ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { Platform, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider } from 'tamagui'
import { AuthProvider } from 'context/auth'
import { ProfileProvider } from 'context/profile'
import { auth as authFactory, useAuthInfo } from 'lib/auth'
import { DarkTheme, LightTheme } from 'ui/theme'

import uiConfig from '../.tamagui'
import { useFonts } from 'expo-font'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const auth = authFactory()

SplashScreen.preventAutoHideAsync()

interface LayoutProps {
  signedIn: boolean
}

const Layout = ({ signedIn }: LayoutProps) => {
  const colorScheme = useColorScheme() ?? 'light'

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={uiConfig} defaultTheme={colorScheme} disableInjectCSS={Platform.OS !== 'web'}>
        <ThemeProvider value={theme}>
          <AuthProvider auth={auth} signedIn={signedIn}>
            <ProfileProvider>
              {auth.Component && <auth.Component />}
              <Slot />
            </ProfileProvider>
          </AuthProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}

const AppLayout = () => {
  const { signedIn, loaded, error } = useAuthInfo(auth)
  const [fontsLoaded] = useFonts(tamaguiFonts)

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
