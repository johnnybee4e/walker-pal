import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiZnVsbHN0YWNram9uIiwiYSI6ImNqZ3M1OTcwcjAwMHMzNGxubXlxbHFxaHoifQ.LYHfQzOU5Hb3GF2JkOJYZQ');

export default class MapScreen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView ref={c => (this._map = c)} style={{ flex: 1 }}
        zoomLevel={1}/>
      </View>
    );
  }
}
