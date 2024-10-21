import { Button, Text } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RootStackScreenProps } from '../types/navigation'

export const HomeScreen: React.FC<RootStackScreenProps<'Home'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 h1Style={styles.title}>
        React Native: Advanced Concepts
      </Text>
      <View style={styles.content}>
        <View style={styles.actions}>
          <Button
            uppercase
            title={'authorization'}
            color="secondary"
            containerStyle={styles.button}
            size="lg"
            onPress={() => navigation.navigate('Authorization')}
          />
          <Button
            uppercase
            title={'Cards'}
            containerStyle={styles.button}
            size="sm"
            onPress={() => navigation.navigate('Cards')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {},
  actions: {
    gap: 10
  }
})
