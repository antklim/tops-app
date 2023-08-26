import { ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Magic } from '@magic-sdk/react-native-expo'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { DarkTheme, LightTheme } from 'ui/theme'
import { AuthProvider } from 'context/auth'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const RootLayout = () => {
  const m = new Magic('API_KEY')

  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider value={theme}>
      <AuthProvider>
        <SafeAreaProvider>
          <m.Relayer />
          <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default RootLayout
