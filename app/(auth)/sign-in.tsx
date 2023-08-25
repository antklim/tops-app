import { StyleSheet } from 'react-native'
import { useAuth } from 'context/auth'
import { Text, View } from 'ui/components'

const SignIn = () => {
  const { signIn } = useAuth()

  return (
    <View style={styles.container}>
      <Text onPress={signIn}>Sign In</Text>
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
})
