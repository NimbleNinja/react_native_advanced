import React from 'react'
import { ReviewStackParamList } from '../types/navigation'
import ReviewScreen from '../screens/ReviewScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { createStackNavigator } from '@react-navigation/stack'

//const Tab = createBottomTabNavigator<ReviewTabsParamList>()
const Stack = createStackNavigator<ReviewStackParamList>()

const ReviewTabsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="reviewNew" component={ReviewScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default ReviewTabsNavigation
