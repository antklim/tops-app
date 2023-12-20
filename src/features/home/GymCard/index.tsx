import { GymLogo } from 'src/ui/components/GymLogo'
import { Button, Card, CardProps, H2, Paragraph, XStack } from 'tamagui'

export interface GymData {
  gymName: string
  weekNumber: number
  weekEndsOn: Date
  nextWeekStartsOn: Date
}

export type GymCardProps = CardProps & GymData

export const GymCard = ({ gymName, weekNumber, weekEndsOn, nextWeekStartsOn, ...props }: GymCardProps) => {
  const weekEnds = weekEndsOn.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  const nextWeekStart = nextWeekStartsOn.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Card size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{gymName}</H2>
        <Paragraph theme="alt2">
          Week {weekNumber} (until {weekEnds})
        </Paragraph>
        <Paragraph theme="alt1_Progress">New climbs on {nextWeekStart}</Paragraph>
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
