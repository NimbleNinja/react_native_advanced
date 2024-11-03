import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import HeartTab from './HeartTab'

const StyledTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const renderTabs = () => {
    return state.routes.map((route, index) => {
      const isFocused = state.index === index

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true
        })

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params)
        }
      }
      return (
        <Pressable onPress={onPress} style={[styles.tab]} key={route.key}>
          <HeartTab focused={isFocused} size={30} index={index} />
        </Pressable>
      )
    })
  }

  return <View style={styles.container}>{renderTabs()}</View>
}

export default StyledTabBar

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'black'
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green'
  }
})
