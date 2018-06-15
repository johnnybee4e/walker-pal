import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = { latitude: 40.7050758, longitude: -74.0091604 };
const destination = { latitude: 40.6577384, longitude: -73.9601139 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyDjyBsYML1ndeGbgZ_gKnKQ-YHPkz3m9C0';
export default class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 40.7050758,
            longitude: -74.0091604,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker coordinate={origin} />
          <MapView.Marker coordinate={destination} />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            mode='transit'
          />
        </MapView>
      </View>
    );
  }
}
