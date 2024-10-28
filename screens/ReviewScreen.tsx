import { StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button } from '@rneui/themed'
import Reanimated, { useAnimatedProps, useSharedValue } from 'react-native-reanimated'
import LottieView from 'lottie-react-native'

const ReanimatedLottieView = Reanimated.createAnimatedComponent(LottieView)

const ReviewScreen = () => {
  const viewRef = useRef<LottieView>(null)
  const [speed, setSpeed] = useState(1)

  const upHandler = () => {
    setSpeed(prev => prev + 0.1)
  }

  const startHandler = () => {
    viewRef.current?.play()
  }

  const slowHandler = () => {
    setSpeed(prev => {
      if (prev <= 0.1) return 0.1
      return prev - 0.1
    })
  }

  const getJobs = () => {
    const myHeaders = new Headers()
    myHeaders.append('x-apihub-key', 'XxNSwUmyScPDzwM28DbgoZC7sMU4yucXgtHIYuFkoDBpWccrai')
    myHeaders.append('x-apihub-host', 'JSearch.allthingsdev.co')
    myHeaders.append('x-apihub-endpoint', '9c9baf06-30e7-41cf-84a4-db6f55e5634b')

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch(`https://JSearch.proxy-production.allthingsdev.co/v1/search?query=${``}&page=1`, requestOptions)
      .then(response => response.json())
      .then(result => {
        result.data
        console.log(result)
      })
      .catch(error => console.error(error))
  }

  return (
    <View style={styles.container}>
      <ReanimatedLottieView
        ref={viewRef}
        speed={speed}
        style={{ height: 200, width: 200 }}
        source={require('../assets/animations/loader.json')}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="up" onPress={upHandler} />
        <Button title="start" onPress={startHandler} />
        <Button title="slow" onPress={slowHandler} />
      </View>
    </View>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  }
})
