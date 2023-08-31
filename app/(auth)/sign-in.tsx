import { Pressable, StyleSheet, TextInput } from 'react-native'
import { useAuth } from 'context/auth'
import { Text, View } from 'ui/component'
import { useState } from 'react'

const SignIn = () => {
  const { signIn } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [signInEnabled, setSignInEnabled] = useState(true)

  const submitSignIn = async () => {
    setSignInEnabled(false)

    try {
      await signIn({ name, email })
    } catch {
    } finally {
      setSignInEnabled(true)
    }
  }

  // TODO: use text content type on iOS for inputs

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" autoCapitalize="none" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail} />
      <Pressable onPress={submitSignIn} disabled={!signInEnabled}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
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
