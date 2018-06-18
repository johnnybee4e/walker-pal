import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F7E0C',
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Noteworthy-Bold', // Futura, Gurmukhi MN, Heiti SC/TC, Helvetica, Kohinoor Bangla, MarkerFelt-Thin, Menlo, Menlo-Bold, Mishafi, NoteWortyh-Bold/Light, Savoye LET, TrebuchetMS-Bold
  },
  homeScreen: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  homeText: {
    fontFamily: 'Noteworthy-Light',
    fontSize: 18,
    textDecorationLine: 'underline',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 4,
    backgroundColor: '#4B250F',
  },
  button: {
    fontFamily: 'Noteworthy-Light',
    width: '40%',
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
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.homeText}>The Walker's (Other) Best Friend</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Scanner')}
        title="Check-in/Out"
      >
        <Text style={{ color: '#fff' }}>Check-In/Out</Text>
      </Button>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        onPress={() => console.log('Schedule Selected')}
        title="Schedule"
      />
    </View>
  </View>
);

export default Home;
