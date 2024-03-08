import { Redirect, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'
import { useSession } from '../../ctx';
import { useTheme } from 'styled-components/native';
import { Text } from 'react-native';

export default function AppLayout() {
  const theme = useTheme()
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
      <Tabs
        screenOptions={{
          headerTintColor: 'white',
          headerShown: false,
          tabBarActiveTintColor: theme.COLORS.ICON_ACTIVE,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.COLORS.FG_APP,
            borderWidth: 0,
            borderColor: theme.COLORS.FG_APP,
          },
        }}
      >
        <Tabs.Screen name='escalas' options={{
          title: 'Escalas',
          tabBarIconStyle: { width: 100, height: 100, },
          tabBarIcon: ({ size, color }) => <MaterialIcons name='view-list' size={32} color={color} />
        }} />

        <Tabs.Screen name='index' options={{
          title: 'Home',
          tabBarIconStyle: { width: 100, height: 100, },
          tabBarIcon: ({ size, color }) => <MaterialIcons name='home' size={32} color={color} />
        }} />

        <Tabs.Screen name='financeiro' options={{
          title: 'Financeiro',
          tabBarIconStyle: { width: 100, height: 100, },
          tabBarIcon: ({ size, color }) => <MaterialIcons name='attach-money' size={32} color={color} />
        }} />

        <Tabs.Screen name='user' options={{
          href: null,
        }} />

      </Tabs>
  )
}
