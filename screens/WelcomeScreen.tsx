import { StyleSheet, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../types/navigation'
import { Button, Text } from '@rneui/themed'
import Slides from '../components/Slides'
import { Slide } from '../types/common'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const SLIDES: Slide[] = [
  { id: '1', text: 'First slide', backgroundColor: 'pink' },
  { id: '2', text: 'Second slide', backgroundColor: 'lightblue' },
  { id: '3', text: 'Third slide', backgroundColor: 'yellow' }
]
const WelcomeScreen: React.FC<RootStackScreenProps<'welcome'>> = ({ navigation }) => {
  const { top } = useSafeAreaInsets()

  const onLastLisdeRelease = () => {
    navigation.navigate('auth')
  }

  return (
    <View style={styles.container}>
      <Slides slides={SLIDES} onLastLisdeRelease={onLastLisdeRelease} />
      <StatusBar hidden />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
