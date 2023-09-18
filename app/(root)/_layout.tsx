import Feather from '@expo/vector-icons/Feather'
import { useTheme } from '@react-navigation/native'
import { Tabs } from 'expo-router'

interface TabBarIconProps {
  name: React.ComponentProps<typeof Feather>['name']
  color: string
}

const TabBarIcon = (props: TabBarIconProps) => <Feather size={28} style={{ marginBottom: -3 }} {...props} />

export const unstable_settings = {
  initialRouteName: 'index',
}

const RootLayout = () => {
  const { colors } = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.background,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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
