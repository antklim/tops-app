import { ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { DarkTheme, LightTheme } from 'ui/theme'
import { AuthProvider } from 'context/auth'
import { magic } from 'lib/auth/magic/client'
import { useUserInfo } from 'lib/auth/authHooks'
import { type UserInfo, auth } from 'lib/auth'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const authProvider = auth()

// SplashScreen.preventAutoHideAsync()

// TODO: use magic.Relayer conditionally
// TODO: set local environment to be able to use local auth provider

interface LayoutProps {
  signedIn: boolean
  userInfo?: UserInfo
}

const Layout = ({ signedIn, userInfo }: LayoutProps) => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider value={theme}>
      <AuthProvider value={{ signedIn, userInfo }}>
        <SafeAreaProvider>
          <magic.Relayer />
          <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

const RootLayout = () => {
  const { loaded, signedIn, userInfo, error } = useUserInfo(authProvider)

  magic.user.isLoggedIn().then((isLoggedIn) => {
    console.log('isLoggedIn', isLoggedIn)
    if (isLoggedIn) {
      magic.user.getInfo().then((info) => {
        console.log({ info })
      })
    }
  })

  console.log('RootLayout', { loaded, signedIn, userInfo, error })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return <Layout signedIn={signedIn} userInfo={userInfo} />
}

export default RootLayout
