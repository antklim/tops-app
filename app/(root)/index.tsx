import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'

import { Text, View } from 'ui/component'
import { useAuth } from 'context/auth'

const App = () => {
  const colorScheme = useColorScheme()

  const { user, signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text>Hello {user?.name}</Text>
      <Text>Scheme name {colorScheme}</Text>
      <Text onPress={signOut}>Sign Out</Text>
      <StatusBar style="auto" />
    </View>
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
