import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mockSchedule } from '../mockScedule';

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    fontFamily: 'Noteworthy-Light',
    textAlign: 'center',
    color: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#1F7E0C',
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Noteworthy-Bold', // Futura, Gurmukhi MN, Heiti SC/TC, Helvetica, Kohinoor Bangla, MarkerFelt-Thin, Menlo, Menlo-Bold, Mishafi, NoteWortyh-Bold/Light, Savoye LET, TrebuchetMS-Bold
  },
});

export default class Schedule extends Component {
  renderRow(walk) {
    return (
      <View
        key={walk.dogName}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          backgroundColor: '#4B250F',
        }}
      >
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text style={styles.text}>{walk.clientName}</Text>
          <Text style={styles.text}>____</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text style={styles.text}>{walk.dogName}</Text>
          <Text style={styles.text}>____</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text style={styles.text}>{walk.clientAddress}</Text>
          <Text style={styles.text}>____</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text style={styles.text}>{walk.startTime}</Text>
          <Text style={styles.text}>____</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text style={styles.text}>{walk.duration}</Text>
          <Text style={styles.text}>____</Text>
        </View>
      </View>
    );
  }

  render() {
    const schedule = mockSchedule;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Schedule</Text>
        </View>
        {schedule.map(walk => {
          // This will render a row for each data element.
          return this.renderRow(walk);
        })}
      </View>
    );
  }
}
