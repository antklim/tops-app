import { ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { DarkTheme, LightTheme } from 'ui/theme'
import { AuthProvider } from 'context/auth'
import { magic } from 'lib/auth/magic/client'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const RootLayout = () => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  // TODO: use magic.Relayer conditionally
  // TODO: set local environment to be able to use local auth provider

  return (
    <ThemeProvider value={theme}>
      <AuthProvider>
        <SafeAreaProvider>
          <magic.Relayer />
          <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default RootLayout
