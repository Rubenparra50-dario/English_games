import React, { Component } from 'react';
import {InstructorsTemplate} from '../../template/start/instructors';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { AsyncStorage, Vibration } from 'react-native';

export default class Instructors extends Component {
  
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
      await AsyncStorage.setItem('expoPushToken', ''+token);
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };
  
  _handleNotification = notification => {
    Vibration.vibrate();
    this.setState({ notification: notification });
    console.log(notification);
  };

//--------------------- inicio sección de eventos de botones ----------------------
  handlePress = () => {
      this.props.navigation.navigate('Home')
  }
//--------------------- fin sección de eventos de botones ------------------------

componentDidMount() {
  this.registerForPushNotificationsAsync();
  this._notificationSubscription = Notifications.addListener(this._handleNotification);
}

  render () {
    return (
      <InstructorsTemplate
      handlePress={this.handlePress}
      ></InstructorsTemplate>
    )
  }
}
