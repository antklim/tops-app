import { ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useAuth } from 'src/context/auth'
import { Button, Input, Spinner, XStack, YStack } from 'tamagui'

export const SignIn = () => {
  const { signIn } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [signingIn, setSigningIn] = useState(false)

  const submitSignIn = async () => {
    setSigningIn(true)

    try {
      await signIn({ name, email })
    } catch {
    } finally {
      setSigningIn(false)
    }
  }

  return (
    <YStack fullscreen flex={1} alignItems="center" justifyContent="center" padding="$3" minWidth={300} space="$4">
      <XStack alignItems="center" space="$4">
        <Input flex={1} id="name" placeholder="Name" onChangeText={setName} />
      </XStack>

      <XStack alignItems="center" space="$4">
        <Input flex={1} id="email" placeholder="Email" onChangeText={setEmail} />
      </XStack>

      {signingIn && <ActivityIndicator />}

      <Button icon={signingIn ? () => <Spinner /> : undefined} onPress={submitSignIn}>
        Sign In
      </Button>
    </YStack>
  )
}
