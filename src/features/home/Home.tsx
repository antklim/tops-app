import { StatusBar } from 'expo-status-bar'
import { H5, Heading, SizableText, YStack } from 'tamagui'

export const Home = () => {
  return (
    <YStack fullscreen flex={1} alignItems="center" padding="$3" minWidth={300} space="$4">
      <Heading>Summer Boulder Ladder 2024</Heading>
      <H5>Week 4</H5>
      <SizableText>This is home page</SizableText>
      <StatusBar style="auto" />
    </YStack>
  )
}
