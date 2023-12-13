import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Text, YStack } from 'tamagui'

export const Home = () => {
  const colorScheme = useColorScheme()

  return (
    <YStack fullscreen flex={1} alignItems="center" justifyContent="center" padding="$3" minWidth={300} space="$4">
      <Text>This is home page</Text>
      <Text>Scheme name {colorScheme}</Text>
      <StatusBar style="auto" />
    </YStack>
  )
}
