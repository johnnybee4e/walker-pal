import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Noteworthy-Bold' // Futura, Gurmukhi MN, Heiti SC/TC, Helvetica, Kohinoor Bangla, MarkerFelt-Thin, Menlo, Menlo-Bold, Mishafi, NoteWortyh-Bold/Light, Savoye LET, TrebuchetMS-Bold
  },
  homeScreen: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dadada',
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  button: {
    fontFamily: 'Noteworthy-Light',
    width: "40%",
    height: 40,
    alignItems: 'center',
    // justifyContent: 'space-around'
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>WalkerPal</Text>
    </View>
    <View style={styles.homeScreen}>
      <Image
        style={{ resizeMode: 'center' }}
        source={require('../images/dog-silhouette.jpg')}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Scanner')}
        title="Check-In/Out"
      />
      <Button
      style={styles.button}
        onPress={() => console.log('Schedule Selected')}
        title="Schedule"
        />

    </View>
  </View>
);

export default Home;

// <Button
//       onPress={() => navigation.navigate('MapScreen')}
//       title="Push To Get Directions"
//     />
