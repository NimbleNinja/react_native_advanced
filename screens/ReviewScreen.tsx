import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg'

const ReviewScreen = () => {
  const width = useSharedValue(100)

  const handleAnimation = () => {
    width.value = withSpring(width.value + 50)
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
      <Svg width="100" height="100" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#007bff" />
            <Stop offset="100%" stopColor="#00ff77" />
          </LinearGradient>
        </Defs>
        <Circle cx="50" cy="50" r="45" stroke="url(#gradient)" strokeWidth="10" fill="none" />
      </Svg>
      <Button title="start" onPress={getJobs} />
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
