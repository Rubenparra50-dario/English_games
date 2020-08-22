import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';


const url="../../../../assets/boardingGames.png";

export const GamesHomeTemplate = props => {

    return (
        <View style={[ sG.container, sG.bg_white]}>
        {props.alignsecond?null:(
          <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
            <ImageBackground source={require(url)} style={[sG.container, sG.w_100, sG.ai_center, sG.jc_center]}>
            </ImageBackground>
          </View>
        )}

        {!props.alignsecond ? null : (
          <View style={[ sG.container]}>
                
            <View style={[sG.w_100, sG.h_80, sG.ai_center, sG.jc_center]}>
                <ScrollView>
                    <View style={[sG.w_100, sG.row_40, sG.ai_center, sG.jc_center]}>
                        <TouchableOpacity style={[sG.w_90, sG.h_80, sG.ai_center, sG.jc_center, sG.brounded]} onPress={props.handlePressHanged}>
                            <ImageBackground resizeMode='cover' source={require('../../../../assets/hangman.jpg')} style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.w_90, sG.h_80]}>
                                    <Text style={[sG.h5, sG.text_secondary, sG.bold]}>Hangman</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={[sG.w_100, sG.h_20, sG.ai_end, sG.jc_end, sG.bg_primary, sG.brounded_top_left_max]}>
                <View style={[sG.w_75, sG.h_50, sG.ai_center, sG.jc_center]}>
                    <TouchableOpacity style={[sG.w_80, sG.h_90, sG.ai_center, sG.jc_end, sG.chrow]} onPress={props._toggleBottomNavigationView}>
                        <View style={[sG.w_75, sG.h_100, sG.ai_end, sG.jc_center]}>
                            <Text style={[sG.bold, sG.text_white, sG.h3]}>Help</Text>
                        </View>
                        <View style={[sG.w_25, sG.h_100, sG.ai_end, sG.jc_center]}>
                            <Entypo name='help-with-circle' style={[sG.text_white, sG.size_icon]}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <BottomSheet
                visible={props.visible}
                //setting the visibility state of the bottom shee
                onBackButtonPress={props._toggleBottomNavigationView}
                //Toggling the visibility state on the click of the back botton
                onBackdropPress={props._toggleBottomNavigationView}
                //Toggling the visibility state on the clicking out side of the sheet
                >
                {/*Bottom Sheet inner View*/}
                    <View style={[sG.bg_white, sG.w_100, sG.h_50, sG.jc_center, sG.ai_center,sG.brounded_top]}>
                        <View style={[sG.h_60, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_30, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={require('../../../../assets/help1.png')} />
                            </View>
                            <View style={[sG.h_90, sG.w_60, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h6, sG.text_primary]}>En este módulo encontrarás algunos juegos para poner a prueba tus capacidades.{'\n'}¡juega ahora!</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h6, sG.text_primary]}>In this module you will find some games to test your abilities.{'\n'}Play now!</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={[sG.h_90, sG.w_20, sG.ai_center, sG.jc_end]} onPress={props._toggleBottomNavigationView}>
                                <MaterialCommunityIcons name='check-decagram' style={[sG.text_primary, sG.size_icon_md]}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheet>
          </View>
        )}
        </View>
    )
}
