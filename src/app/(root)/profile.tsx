import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Button, Text, YStack } from 'tamagui'
import { useAuth } from 'src/context/auth'
import { useProfile } from 'src/context/profile'

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
    <YStack
      theme="green"
      fullscreen
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$3"
      minWidth={300}
      space="$4">
      <Text>This is profile page</Text>
      <Text>Hello {profile?.name}</Text>

      {signingOut && <ActivityIndicator />}

      <Button onPress={submitSignOut} disabled={signingOut} unstyled>
        <Text>Sign Out</Text>
      </Button>

      <Button>Lorem ipsum</Button>

      <StatusBar style="auto" />
    </YStack>
  )
}

export default App
