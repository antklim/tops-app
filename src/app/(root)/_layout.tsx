import { Tabs } from 'expo-router'
import { useTheme } from 'tamagui'
import { User2 as Profile, Home } from '@tamagui/lucide-icons'

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
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  )
}

export default RootLayout
