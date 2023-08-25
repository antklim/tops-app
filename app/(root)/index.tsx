import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'

import { Text, View} from 'ui/components'
import { useAuth } from 'context/auth'

const App = () => {
  const colorScheme = useColorScheme()

  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
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
