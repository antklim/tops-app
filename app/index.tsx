import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'
import { ThemeProvider } from "@react-navigation/native"

import View from '@/ui/components/view'
import Text from '@/ui/components/text'
import DarkTheme from '@/ui/themes/dark'
import LightTheme from '@/ui/themes/light'

const App = () => {
  const colorScheme = useColorScheme()

  const theme = colorScheme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeProvider value={theme}>
      <View style={styles.container}>
        <Text>Scheme name {colorScheme}</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
