import Feather from '@expo/vector-icons/Feather'
import { Tabs } from 'expo-router'
// import { Home } from '@tamagui/lucide-icons'
import { useTheme } from 'tamagui'

interface TabBarIconProps {
  name: React.ComponentProps<typeof Feather>['name']
  color: string
}

const TabBarIcon = (props: TabBarIconProps) => <Feather size={28} style={{ marginBottom: -3 }} {...props} />

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayout = () => {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorFocus.get(),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // tabBarIcon: () => <Home />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default RootLayout
