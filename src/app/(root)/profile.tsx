import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native'
import { Button } from 'tamagui'
import { useAuth } from 'src/context/auth'
import { useProfile } from 'src/context/profile'
import { Text, View } from 'src/ui/component'

const App = () => {
  const { signOut } = useAuth()
  const { profile } = useProfile()
  const [signingOut, setSigningOut] = useState(false)

  const submitSignOut = async () => {
    setSigningOut(true)

    try {
      await signOut()
    } catch {
    } finally {
      setSigningOut(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text>This is profile page</Text>
      <Text>Hello {profile?.name}</Text>

      {signingOut && <ActivityIndicator />}

      <Pressable onPress={submitSignOut} disabled={signingOut}>
        <Text>Sign Out</Text>
      </Pressable>

      <Button>Lorem ipsum</Button>

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
