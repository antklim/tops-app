import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'
import { Text, View } from 'ui/component'

const App = () => {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.container}>
      <Text>This is home page</Text>
      <Text>Scheme name {colorScheme}</Text>
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
