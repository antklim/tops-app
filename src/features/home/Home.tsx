import { Heading, ScrollView, Spacer, YStack } from 'tamagui'
import { GymCard, type GymData } from './GymCard'
import { FC } from 'react'

const GymCardView: FC<{ gym: GymData; isFirstCard: boolean }> = ({ gym, isFirstCard }) => (
  <>
    {!isFirstCard && <Spacer width="$1" />}
    <GymCard size="$5" width={335} height={340} {...gym} />
  </>
)

export const Home = () => {
  // TODO: get data from api
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
    <ScrollView
      fullscreen
      flex={1}
      contentContainerStyle={{ alignItems: 'center' }}
      padding="$3"
      minWidth={300}
      space="$4">
      <Heading>Summer Boulder Ladder 2024</Heading>
      <YStack space="$2">
        <Spacer width="$1" />
        {gymData.map((gym, i) => (
          <GymCardView key={i} gym={gym} isFirstCard={i === 0} />
        ))}
      </YStack>
    </ScrollView>
  )
}
