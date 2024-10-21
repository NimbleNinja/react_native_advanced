import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '../store/hooks'
import { signoutThunk } from '../store/authorization'
import { Button, Text } from '@rneui/themed'
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps'

const DeckScreen = () => {
  const dispatch = useAppDispatch()

  const signoutHandler = () => {
    dispatch(signoutThunk())
  }

  const onRegionChangeHandler = (region: Region) => {
    console.log(region)
  }

  return (
    <View style={styles.container}>
      <Text h2>DeckScreen</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChangeHandler}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker title="Marker 1" coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>
      <Button onPress={signoutHandler}>signout</Button>
    </View>
  )
}

export default DeckScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})
