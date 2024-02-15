import { Redirect, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'

import { useSession } from '../../ctx';
import { Text } from 'react-native';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
      <Tabs 
        screenOptions={{
          headerTintColor: 'white',
          headerShown: false,
          tabBarActiveTintColor: '#000000',
          tabBarStyle: {
              height: 60,
              backgroundColor: '#ffffff',
              borderWidth: 0,
              borderColor: '#ffffff',
          },
}}
      >
        <Tabs.Screen name='events' options={{
          title: 'Eventos',
          tabBarIconStyle: { width: 100, height: 100, },
          tabBarIcon: ({ size, color }) => <MaterialIcons name='event-note' size={32} color={color} />
        }} />

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

        <Tabs.Screen name='lounge' options={{
          title: 'Lounge',
          tabBarIconStyle: { width: 100, height: 100, },
          tabBarIcon: ({ size, color }) => <MaterialIcons name='fastfood' size={32} color={color} />
        }} />

      </Tabs>
    )
}
