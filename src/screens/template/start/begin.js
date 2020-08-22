import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';

export const SwiperBeginTemplate = props => {

    return (
      <View style={[ sG.container, sG.bg_white]}>
        {/* {props.alignsecond?null:(
          <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
            <ImageBackground source={require("../../../../assets/splash.png")} style={[sG.container, sG.w_100, sG.ai_center, sG.jc_center]}>
            </ImageBackground>
          </View>
        )}

        {!props.alignsecond ? null : ( */}
          <View style={[ sG.container]}>
            {props.status===1?
            <ImageBackground  source={require('../../../../assets/tour_1.png')} style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_end]}>
              <TouchableOpacity style={[sG.w_100, sG.h_10, sG.ai_cener, sG.jc_end, sG.chrow]} onPress={()=>props.handlePressStatus(2)}>
                <View style={[sG.w_50, sG.h_100, sG.ai_end, sG.jc_center]}>
                  <Text style={[sG.text_white, sG.bold, sG.h4]}>Continuar</Text>
                </View>
                <View style={[sG.w_20, sG.h_100, sG.ai_center, sG.jc_center]}>
                  <FontAwesome name="chevron-circle-right" style={[sG.size_icon, sG.text_white]} />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            :null}

            {props.status===2?
            <ImageBackground  source={require('../../../../assets/tour_2.png')} style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_end]}>
              <TouchableOpacity style={[sG.w_100, sG.h_10, sG.ai_cener, sG.jc_end, sG.chrow]}  onPress={()=>props.handlePressStatus(3)}>
                <View style={[sG.w_50, sG.h_100, sG.ai_end, sG.jc_center]}>
                  <Text style={[sG.text_white, sG.bold, sG.h4]}>Continuar</Text>
                </View>
                <View style={[sG.w_20, sG.h_100, sG.ai_center, sG.jc_center]}>
                  <FontAwesome name="chevron-circle-right" style={[sG.size_icon, sG.text_white]} />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            :null}

            {props.status===3?
            <ImageBackground  source={require('../../../../assets/tour_3.png')} style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_end]}>
              <TouchableOpacity style={[sG.w_100, sG.h_10, sG.ai_cener, sG.jc_end, sG.chrow]} onPress={props.handlePress}>
                <View style={[sG.w_50, sG.h_100, sG.ai_end, sG.jc_center]}>
                  <Text style={[sG.text_white, sG.bold, sG.h4]}>¡Empezemos!</Text>
                </View>
                <View style={[sG.w_20, sG.h_100, sG.ai_center, sG.jc_center]}>
                  <FontAwesome name="check-circle" style={[sG.size_icon, sG.text_white]} />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            :null}
          </View>
        {/* )} */}
      </View>
    )
}
