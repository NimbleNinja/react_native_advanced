import { Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native'

type Props = {
  size: number
  focused: boolean
}

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

const HeartTab: React.FC<Props> = ({ size, focused }) => {
  const ref = useRef<LottieView>(null)
  const progress = useRef(new Animated.Value(0)).current

  console.log('focused: ', focused)

  useEffect(() => {
    if (!ref.current) return

    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start(() => {
      progress.setValue(0)
      console.log('Animation end')
    })
  }, [])

  return (
    <AnimatedLottieView
      ref={ref}
      progress={progress}
      style={[{ width: size, height: size }]}
      source={require('../assets/animations/heart.json')}
    />
  )
}

export default HeartTab

const styles = StyleSheet.create({})
