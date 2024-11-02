import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckScreen from '../screens/DeckScreen'
import { MapScreen } from '../screens/MapScreen'
import { MainTabsParamList } from '../types/navigation'
import ReviewTabsNavigation from './ReviewTabsNavigation'
import { Icon } from '@rneui/themed'
import HeartTab from '../components/HeartTab'
import StyledTabBar from '../components/StyledTabBar'

const Tab = createBottomTabNavigator<MainTabsParamList>()

//tabBar={props => <StyledTabBar {...props} />}

const MainTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <StyledTabBar {...props} />}>
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
          tabBarIcon: ({ focused, size }) => {
            //console.log('Focused in Review: ', focused)

            return <HeartTab size={size} focused={focused} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabsNavigation
