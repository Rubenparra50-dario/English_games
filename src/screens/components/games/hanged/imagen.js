import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import { sG } from '../../../components/general/styles';

const IMAGENES = {
  '0': require('../../../../../assets/games/hanged/0.jpg'),
  '1': require('../../../../../assets/games/hanged/1.jpg'),
  '2': require('../../../../../assets/games/hanged/2.jpg'),
  '3': require('../../../../../assets/games/hanged/3.jpg'),
  '4': require('../../../../../assets/games/hanged/4.jpg'),
  '5': require('../../../../../assets/games/hanged/5.jpg'),
  '6': require('../../../../../assets/games/hanged/6.jpg'),
};

export default class Imagen extends Component {

  render() {
    return (
      <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={IMAGENES[this.props.numFallos.toString()]} />
    );
  }
}