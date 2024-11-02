import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Text } from '@rneui/themed'
import HeartTab from './HeartTab'

const StyledTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  //console.log('state.index: ', state.index)
  //console.log('state.routes: ', state.routes)
  //console.log('descriptors: ', descriptors)
  //console.log('navigation: ', navigation)

  const renderTabs = () => {
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key]
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name

      const isFocused = state.index === index

      //if (index === 2) {
      //  console.log(`Route key: ${route.name.toUpperCase()} isFocused: ${isFocused}`)
      //}

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
