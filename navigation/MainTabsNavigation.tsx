import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckScreen from '../screens/DeckScreen'
import { MapScreen } from '../screens/MapScreen'
import { MainTabsParamList } from '../types/navigation'
import ReviewTabsNavigation from './ReviewTabsNavigation'
import { Icon } from '@rneui/themed'
import HeartTab from '../components/HeartTab'

const Tab = createBottomTabNavigator<MainTabsParamList>()

const MainTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="deck"
        component={DeckScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Icon name="search" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="map" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="review"
        component={ReviewTabsNavigation}
        options={{
          headerShown: false,
          //tabBarIcon: ({ color, size, focused }) => <Icon name="visibility" size={size} color={color} />
          tabBarIcon: props => {
            return <HeartTab size={props.size} focused={props.focused} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabsNavigation
