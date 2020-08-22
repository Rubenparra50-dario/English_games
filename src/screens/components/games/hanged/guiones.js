import React, { Component } from 'react';
import { Text} from 'react-native';
import { sG } from '../../../components/general/styles';

export default class Guiones extends Component {

  getGuionesConLetterSpacing(){
    return this.props.palabraAdivinadaHastaElMomento.split('').join(' ');
  }

  render() {
    return (
      <Text style={[sG.h1, sG.text_center, sG.text_secondary]}>{this.getGuionesConLetterSpacing()}</Text>
    );
  }
}