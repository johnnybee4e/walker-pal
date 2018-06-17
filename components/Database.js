import * as firebase from 'firebase';
import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyALupEZyeNCf2Oxc-gj2n8T3zTFy53bZoo',
  authDomain: 'walkerpal-95368.firebaseapp.com',
  databaseURL: 'https://walkerpal-95368.firebaseio.com',
  storageBucket: 'walkerpal-95368.appspot.com',
};


export default class DatabaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      currentWalk: {},
      loading: false,
    };
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig, 'walkerPalDb');
    const database = firebase.database();
    // const rootRef = database.ref();
    // const schedRef = rootRef.child('schedules');
    // const storage = firebase.storage();
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 34 }}>
        <View
          style={{
            backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 64,
          }}
        />
        <FlatList
          data={this.state.schedule}
          renderItem={({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  margin: 10,
                }}
              >
                This is a test{item.clientName}
              </Text>
            );
          }}
        />
      </View>
    );
  }
}
