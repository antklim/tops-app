import { H5, H6, Heading, ListItem, Separator, YGroup, YStack } from 'tamagui'

export const Home = () => {
  return (
    <YStack fullscreen flex={1} alignItems="center" padding="$3" minWidth={300} space="$4">
      <Heading>Summer Boulder Ladder 2024</Heading>

      <H5>Week 4</H5>
      <H6>Gym: The Lactic Factory</H6>

      <YGroup separator={<Separator />}>
        <YGroup.Item>
          <ListItem title="Gym: The Lactic Factory" />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem title="Problems: 10" />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem title="Sent: 7" subTitle="Flashed: 4" />
        </YGroup.Item>
      </YGroup>

      <Separator marginVertical={15} />

      <YGroup separator={<Separator />}>
        <YGroup.Item>
          <ListItem title="Gym: Northcote" />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem title="Problems: 10" />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem title="Sent: 5" subTitle="Flashed: 1" />
        </YGroup.Item>
      </YGroup>
    </YStack>
  )
}
