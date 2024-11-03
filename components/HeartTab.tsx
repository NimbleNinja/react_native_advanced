import React, { useEffect, useRef, memo } from 'react'
import LottieView from 'lottie-react-native'

type Props = {
  size: number
  focused: boolean
  index: number
}

const HeartTab = memo<Props>(({ size, focused }) => {
  const ref = useRef<LottieView>(null)

  useEffect(() => {
    if (focused) {
      ref.current?.play()
    } else {
      ref.current?.reset()
    }
  }, [focused])

  return (
    <LottieView
      ref={ref}
      loop={false}
      speed={1.5}
      style={[{ width: size, height: size }]}
      source={require('../assets/animations/heart.json')}
    />
  )
})

HeartTab.displayName = 'HeartTab'

export default HeartTab
