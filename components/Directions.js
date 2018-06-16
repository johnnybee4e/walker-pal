import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';

const origin = { latitude: 40.5810297, longitude: -73.828232 };
const destination = { latitude: 40.6577384, longitude: -73.9601139 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyDjyBsYML1ndeGbgZ_gKnKQ-YHPkz3m9C0';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRouteSteps: {},
    };
  }

  componentDidMount() {
    axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=40.7050758,-74.0091604&destination=40.6577384,-73.9601139&mode=transit&key=AIzaSyDjyBsYML1ndeGbgZ_gKnKQ-YHPkz3m9C0`
    )
      .then(res => {
        console.log('We made it!')
      })
      // .then(responseText => {
      //   console.log(responseText)
      //   this.setState({ currentRouteSteps: responseText });
      // })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 2 }}
          initialRegion={{
            latitude: 40.7050758,
            longitude: -74.0091604,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker coordinate={origin} />
          <MapView.Marker
            coordinate={this.props.navigation.state.params.currentCoords}
          />
          <MapViewDirections
            origin={origin}
            destination={this.props.navigation.state.params.currentCoords}
            apikey={GOOGLE_MAPS_APIKEY}
            mode="transit"
          />
        </MapView>
        <View style={{ flex: 1 }}>
          <Text>This is a test</Text>
        </View>
      </View>
    );
  }
}

// {this.state.currentRouteSteps.forEach(step => {
//   return <Text>{`${step})}`}</Text>;
// })}
