import React from 'react';
import { Text, View, TouchableOpacity, AlertIOS } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from 'axios';

export default class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      checkedIn: false,
    };
    this._onBarCodeRead = this._onBarCodeRead.bind(this);
    this.timeStamp = this.timeStamp.bind(this);
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _onBarCodeRead(e) {
    let clientName = e.data;
    let time = this.timeStamp()
    if (!this.state.checkedIn) {
      this.setState({ checkedIn: true });
      AlertIOS.alert(`Checking into ${e.data}'s at ${this.timeStamp()}`);
    } else {
      this.setState({ checkedIn: false });
      // AlertIOS.alert(`Checking out of ${e.data}'s at ${this.timeStamp()}`);
      AlertIOS.alert(
        `Checking out of ${e.data}'s at ${this.timeStamp()}`,
        'Would you like the best route to your next Walk?',
        [
          {
            text: 'No',
            onPress: () => console.log('No Pressed'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => this.props.navigation.navigate('MapScreen')
          },
        ]
      );
    }
  }

  timeStamp() {
    // Create a date object with the current time
    let now = new Date();

    // Create an array with the current month, day and time
    let date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];

    // Create an array with the current hour, minute and second
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()];

    // Determine AM or PM suffix based on the hour
    let suffix = time[0] < 12 ? 'AM' : 'PM';

    // Convert hour from military time
    time[0] = time[0] < 12 ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
    time[0] = time[0] || 12;

    // If seconds and minutes are less than 10, add a zero
    for (let i = 1; i < 3; i++) {
      if (time[i] < 10) {
        time[i] = '0' + time[i];
      }
    }

    // Return the formatted string
    return `${date.join('/')} ${time.join(':')} $ {suffix}`;
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            onBarCodeRead={this._onBarCodeRead}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                >
                  {' '}
                  Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
