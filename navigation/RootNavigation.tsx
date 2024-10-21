import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'
import AuthorizationScreen from '../screens/AuthorizationScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import MainTabsNavigation from './MainTabsNavigation'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { checkAuthorizationThunk, selectToken } from '../store/authorization'
import { ActivityIndicator, View } from 'react-native'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigation = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)

  useEffect(() => {
    dispatch(checkAuthorizationThunk())
  }, [])

  console.log(token)

  //if (token === null) {
  //  return (
  //    <View style={{ flex: 1, justifyContent: 'center' }}>
  //      <ActivityIndicator size={60} />
  //    </View>
  //  )
  //}

  //return (
  //  <RootStack.Navigator screenOptions={{ headerShown: false }}>
  //    {token ? (
  //      <RootStack.Screen name="main" component={MainTabsNavigation} />
  //    ) : (
  //      <>
  //        <RootStack.Screen name="welcome" component={WelcomeScreen} />
  //        <RootStack.Screen name="auth" component={AuthorizationScreen} />
  //      </>
  //    )}
  //  </RootStack.Navigator>
  //)

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="main" component={MainTabsNavigation} />
    </RootStack.Navigator>
  )
}
