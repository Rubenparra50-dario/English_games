import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';

export const InstructorsTemplate = props => {

    return (
        <View style={[ sG.container, sG.ai_center, sG.jc_center]}>
            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_end]} source={require('../../../../assets/backgroundMolecule.jpg')}>

                <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <Text style={[sG.text_secondary, sG.bold, sG.text_center, sG.h2]}>Welcome !</Text>
                </View>

                <View style={[sG.h_30, sG.w_100, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_right, sG.chrow]}>
                        <View style={[sG.h_90, sG.w_50, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.text_white, sG.bold, sG.h5]}>Hello, my name is Ruben!</Text>
                            <Text style={[sG.text_white, sG.bold, sG.h7]}>{'\n'}I will accompany you on your tour of the application.</Text>
                        </View>
                        <View style={[sG.h_90, sG.w_40, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={require('../../../../assets/help1.png')} />
                        </View>
                    </View>
                </View>

                <View style={[sG.h_30, sG.w_100, sG.ai_end, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_left, sG.chrow]}>
                        <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.bg_primary, sG.broundedmax, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_40, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={require('../../../../assets/help2.png')} />
                            </View>
                            <View style={[sG.h_90, sG.w_60, sG.ai_center, sG.jc_center]}>
                                <Text style={[sG.text_white, sG.bold, sG.h5]}>Hello, my name is Laura!</Text>
                                <Text style={[sG.text_white, sG.bold, sG.h7]}>{'\n'}I will help you with your questions in your learning process.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[sG.h_20, sG.w_100, sG.ai_center, sG.jc_end]}>
                    <TouchableOpacity style={[sG.h_50, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_top]} onPress={props.handlePress}>
                        <Text style={[sG.text_white, sG.bold, sG.text_center, sG.h2]}>Go !</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
