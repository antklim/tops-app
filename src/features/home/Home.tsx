import { FlatList } from 'react-native'
import { GymLogo } from 'src/ui/components/GymLogo'
import { Button, Card, CardProps, H2, Heading, Paragraph, Spacer, XStack, YStack } from 'tamagui'

interface GymData {
  gymName: string
  weekNumber: number
  newClimbsDate: Date
}

type GymCardProps = CardProps & GymData

const GymCard = ({ gymName, weekNumber, newClimbsDate, ...props }: GymCardProps) => {
  const formattedDate = newClimbsDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Card size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{gymName}</H2>
        <Paragraph theme="alt2">Week {weekNumber}</Paragraph>
        <Paragraph theme="alt1_Progress">New climbs on {formattedDate}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Go to gym</Button>
      </Card.Footer>
      <Card.Background>
        <GymLogo />
      </Card.Background>
    </Card>
  )
}

export const Home = () => {
  const gymData: GymData[] = [
    {
      gymName: 'Northcote',
      weekNumber: 3,
      newClimbsDate: new Date('2023-11-30'),
    },
    {
      gymName: 'The Lactic Factory',
      weekNumber: 4,
      newClimbsDate: new Date('2023-12-02'),
    },
  ]

  return (
    <YStack fullscreen flex={1} alignItems="center" padding="$3" minWidth={300} space="$4">
      <Heading>Summer Boulder Ladder 2024</Heading>

      <FlatList
        data={gymData}
        renderItem={({ item }) => (
          <GymCard
            gymName={item.gymName}
            weekNumber={item.weekNumber}
            newClimbsDate={item.newClimbsDate}
            size="$5"
            width={335}
            height={340}
          />
        )}
        keyExtractor={(item) => item.gymName}
        ItemSeparatorComponent={() => <Spacer width="$1" />}
      />
    </YStack>
  )
}
