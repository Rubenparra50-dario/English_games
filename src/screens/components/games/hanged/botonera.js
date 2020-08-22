import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { sG } from '../../../components/general/styles';

export default class Botonera extends Component {

  getBotones(){
    return this.props.botones.map(
      (boton, index) => 
        <TouchableOpacity onPress={() => this.props.sePulsoBoton(index)} key={index} style={[sG.ai_center, sG.jc_center]}>
          <View style={boton.estado == "no-pulsado" ? [sG.w_90, sG.h_20, sG.m_xs, sG.brounded, sG.ai_center, sG.jc_center, sG.bg_primary] : (
                             boton.estado == "pulsado-acertado" ? 
                             [sG.w_90, sG.h_20, sG.m_xs, sG.brounded, sG.ai_center, sG.jc_center, sG.bg_green_light]
                             :
                             [sG.w_90, sG.h_20, sG.m_xs, sG.brounded, sG.ai_center, sG.jc_center, sG.bg_red] )}>
            <Text style={[sG.h5, sG.text_white]}>{boton.letra}</Text>
          </View>
        </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[sG.chrow, sG.flexWrap, sG.ai_center, sG.jc_center]}>
        {this.getBotones()}
      </View>
    );
  }
}
