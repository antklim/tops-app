import { ActivityIndicator, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import { useAuth } from 'context/auth'
import { Text, View } from 'ui/component'

import { Button, Input, Label, Spinner, XStack, YStack } from 'tamagui'

const SignIn = () => {
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
    // <View style={styles.container}>
    //   <TextInput style={styles.input} autoCapitalize="none" placeholder="Name" onChangeText={setName} />
    //   <TextInput
    //     style={styles.input}
    //     autoCapitalize="none"
    //     inputMode="email"
    //     placeholder="Email"
    //     onChangeText={setEmail}
    //   />

    //   {signingIn && <ActivityIndicator />}

    //   <Pressable onPress={submitSignIn} disabled={signingIn}>
    //     <Text>Sign In</Text>
    //   </Pressable>
    // </View>
    <YStack
      theme="green"
      fullscreen
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding="$3"
      minWidth={300}
      space="$4">
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

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 0.75,
    borderRadius: 7,
    margin: 8,
    padding: 10,
    width: 300,
  },
})
