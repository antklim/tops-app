import { ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { DarkTheme, LightTheme } from 'ui/theme'
import { AuthProvider } from 'context/auth'
import { type AuthInfo, auth as authFactory, useAuthInfo } from 'lib/auth'
import { type Profile, useProfile } from 'lib/profile'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const auth = authFactory()

SplashScreen.preventAutoHideAsync()

interface LayoutProps {
  signedIn: boolean
  authInfo?: AuthInfo // user info from the auth provider
  userProfile?: Profile // user profile stored locally
}

const Layout = ({ authInfo, signedIn, userProfile }: LayoutProps) => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider value={theme}>
      <AuthProvider auth={auth} value={{ authInfo, signedIn }}>
        <SafeAreaProvider>
          {auth.Component && <auth.Component />}
          <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

const RootLayout = () => {
  const { authInfo, signedIn, loaded: authInfoLoaded, error: authInfoError } = useAuthInfo(auth)
  const { profile, loaded: profileLoaded, error: profileError } = useProfile()

  useEffect(() => {
    if (authInfoError) throw authInfoError
    if (profileError) throw profileError
  }, [authInfoError, profileError])

  useEffect(() => {
    if (authInfoLoaded && profileLoaded) {
      SplashScreen.hideAsync()
    }
  }, [authInfoLoaded, profileLoaded])

  if (!authInfoLoaded || !profileLoaded)
    return <SafeAreaProvider>{auth.Component && <auth.Component />}</SafeAreaProvider>

  return <Layout signedIn={signedIn} authInfo={authInfo} userProfile={profile} />
}

export default RootLayout
