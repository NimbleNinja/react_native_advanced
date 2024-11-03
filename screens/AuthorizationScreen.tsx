import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Icon, Text } from '@rneui/themed'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useAppDispatch } from '../store/hooks'
import { signinThunk } from '../store/authorization'

GoogleSignin.configure({
  webClientId:
    '693464854055-boqcr80o0767reaispb0k4bhlehbq24t.apps.googleusercontent.com'
})

const AuthorizationScreen = () => {
  const dispatch = useAppDispatch()

  const submitHandler = () => {
    dispatch(signinThunk())
  }

  return (
    <View style={styles.container}>
      <Text h2 style={styles.title}>
        Sing up
      </Text>
      <View style={styles.content}>
        <Button
          containerStyle={styles.button}
          onPress={submitHandler}
          icon={<Icon name="login" size={35} color="white" />}
        >
          Sign in
        </Button>
      </View>
    </View>
  )
}

export default AuthorizationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  },
  button: {
    alignSelf: 'center'
  }
})
