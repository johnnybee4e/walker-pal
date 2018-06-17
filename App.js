import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Scanner from './components/Scanner';
import Test from './components/Test';
import MapScreen from './components/Directions';
import DatabaseComponent from './components/Database';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  DatabaseComponent: {
    screen: DatabaseComponent,
    navigationOptions: {
      headerTitle: 'Schedule',
    },
  },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      headerTitle: 'Scanner',
    },
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      headerTitle: 'Map'
    }
  }
});

export default RootNavigator;
