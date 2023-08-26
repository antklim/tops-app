import { ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'

import { DarkTheme, LightTheme } from 'ui/theme'
import { AuthProvider } from 'context/auth'

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router'

const RootLayout = () => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider value={theme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default RootLayout
