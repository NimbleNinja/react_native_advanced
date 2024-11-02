import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Button, Text } from '@rneui/themed'
import { Slide } from '../types/common'

type Props = {
  slides: Slide[]
  onLastLisdeRelease: () => void
}

const Slides: React.FC<Props> = ({ slides, onLastLisdeRelease }) => {
  const { width } = useWindowDimensions()

  const renderSlides = () => {
    return slides.map(({ text, id, backgroundColor }, i, arr) => {
      return (
        <View key={id} style={[styles.slide, { backgroundColor, width }]}>
          <Text h2>{text}</Text>
          {arr.length - 1 === i && <Button onPress={onLastLisdeRelease}>Last Slide</Button>}
        </View>
      )
    })
  }

  return (
    <ScrollView horizontal pagingEnabled style={styles.container}>
      {renderSlides()}
    </ScrollView>
  )
}

export default Slides

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
