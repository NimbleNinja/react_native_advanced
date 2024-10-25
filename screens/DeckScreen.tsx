import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { signoutThunk } from '../store/authorization'
import { Button, Text } from '@rneui/themed'

const DeckScreen = () => {
  const dispatch = useAppDispatch()

  const signoutHandler = () => {
    dispatch(signoutThunk())
  }

  return (
    <View style={styles.container}>
      <Button onPress={signoutHandler}>signout</Button>
    </View>
  )
}

export default DeckScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
