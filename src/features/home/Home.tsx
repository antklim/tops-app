import { FlatList } from 'react-native'
import { Heading, Spacer, YStack } from 'tamagui'
import { GymCard, type GymData } from './GymCard'

export const Home = () => {
  const gymData: GymData[] = [
    {
      gymName: 'Brunswick',
      weekNumber: 4,
      weekEndsOn: new Date('2023-12-09'),
      nextWeekStartsOn: new Date('2023-12-10'),
    },
    {
      gymName: 'Northcote',
      weekNumber: 3,
      weekEndsOn: new Date('2023-11-29'),
      nextWeekStartsOn: new Date('2023-11-30'),
    },
    {
      gymName: 'The Lactic Factory',
      weekNumber: 4,
      weekEndsOn: new Date('2023-12-01'),
      nextWeekStartsOn: new Date('2023-12-02'),
    },
  ]

  return (
    <YStack fullscreen flex={1} alignItems="center" padding="$3" minWidth={300} space="$4">
      <Heading>Summer Boulder Ladder 2024</Heading>

      <FlatList
        data={gymData}
        renderItem={({ item }) => <GymCard size="$5" width={335} height={340} {...item} />}
        keyExtractor={({ gymName }) => gymName}
        ItemSeparatorComponent={() => <Spacer width="$1" />}
      />
    </YStack>
  )
}
