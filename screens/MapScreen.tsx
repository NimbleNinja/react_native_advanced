import { StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

export const MapScreen = () => {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      onRegionChangeComplete={() => {}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      <Marker title="Marker 1" coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
