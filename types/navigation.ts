import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Root stack
export type RootStackParamList = {
  welcome: undefined
  auth: undefined
  main: NavigatorScreenParams<MainTabsParamList>
  // old
  Cards: undefined
  Home: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

// Main tabs
export type MainTabsParamList = {
  deck: undefined
  map: undefined
  review: NavigatorScreenParams<ReviewStackParamList>
}

export type MainTabsScreenProps<T extends keyof MainTabsParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabsParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>

// Review tabs
export type ReviewStackParamList = {
  settings: undefined
  reviewNew: undefined
}

export type ReviewTabsScreenProps<T extends keyof ReviewStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ReviewStackParamList, T>,
  MainTabsScreenProps<keyof MainTabsParamList>
>
