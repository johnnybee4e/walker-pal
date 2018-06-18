import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Scanner from './components/Scanner';
import Schedule from './components/Schedule';
import MapScreen from './components/Directions';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Schedule: {
    screen: Schedule,
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
