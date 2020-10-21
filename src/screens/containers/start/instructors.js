import React, { Component } from 'react';
import {InstructorsTemplate} from '../../template/start/instructors';
import { AsyncStorage, Vibration } from 'react-native';

export default class Instructors extends Component {
//--------------------- inicio sección de eventos de botones ----------------------
  handlePress = () => {
      this.props.navigation.navigate('Home')
  }
//--------------------- fin sección de eventos de botones ------------------------

  render () {
    return (
      <InstructorsTemplate
      handlePress={this.handlePress}
      ></InstructorsTemplate>
    )
  }
}
