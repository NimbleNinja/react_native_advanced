import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckScreen from '../screens/DeckScreen'
import { MapScreen } from '../screens/MapScreen'
import { MainTabsParamList } from '../types/navigation'
import ReviewTabsNavigation from './ReviewTabsNavigation'
import { Icon } from '@rneui/themed'

const Tab = createBottomTabNavigator<MainTabsParamList>()

const MainTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="deck"
        component={DeckScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Icon name="search" size={size} color={color} />,
          tabBarBadge: 1
        }}
      />
      <Tab.Screen name="map" component={MapScreen} />
      <Tab.Screen name="review" component={ReviewTabsNavigation} />
    </Tab.Navigator>
  )
}

export default MainTabsNavigation
