import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';
import Carousel from 'react-native-snap-carousel';


const url="../../../../assets/boardingGames.png";

export const AudioBooksHomeTemplate = props => {

    return (
        <View style={[ sG.container, sG.bg_white]}>
        {props.alignsecond?null:(
            <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
                <ImageBackground resizeMode='contain' style={[sG.w_50, sG.h_40]} source={require('../../../../assets/gif/loading.gif')} />
                <View style={[sG.w_90, sG.h_10, sG.ai_center, sG.jc_center]}>
                        <Text style={[sG.text_primary, sG.h5, sG.text_center, sG.bold]}>Loading ...</Text>
                </View>
            </View>
        )} 

        {!props.alignsecond ? null : (
          <View style={[ sG.container]}>
                
                <View style={[sG.w_100, sG.h_80, sG.ai_center, sG.jc_center]}>
                <ScrollView>
                    <View style={[sG.w_100, sG.row_80, sG.ai_center, sG.jc_center, sG.chrow]}>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]} onPress={() => props.handlePress(1)}>
                                <ImageBackground resizeMode='cover' source={require('../../../../assets/audiobooks/frog.png')} style={[sG.h_85, sG.w_100, sG.ai_center, sG.jc_center]}>
                                </ImageBackground>
                                <View style={[sG.h_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.bold, sG.h7, sG.text_green_light, sG.text_center]}>A frog he would a-wooing go</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]} onPress={() => props.handlePress(2)}>
                                <ImageBackground resizeMode='cover' source={require('../../../../assets/audiobooks/red.png')} style={[sG.h_85, sG.w_100, sG.ai_center, sG.jc_center]}>
                                </ImageBackground>
                                <View style={[sG.h_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.bold, sG.h7, sG.text_green_light, sG.text_center]}>Little Red Riding Hood</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={[sG.w_100, sG.row_80, sG.ai_center, sG.jc_center, sG.chrow]}>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]} onPress={() => props.handlePress(3)}>
                                <ImageBackground resizeMode='cover' source={require('../../../../assets/audiobooks/poor.png')} style={[sG.h_85, sG.w_100, sG.ai_center, sG.jc_center]}>
                                </ImageBackground>
                                <View style={[sG.h_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.bold, sG.h7, sG.text_green_light, sG.text_center]}>Kiddie Cat, Higway Robber</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]} onPress={() => props.handlePress(4)}>
                                <ImageBackground resizeMode='cover' source={require('../../../../assets/audiobooks/duck.png')} style={[sG.h_85, sG.w_100, sG.ai_center, sG.jc_center]}>
                                </ImageBackground>
                                <View style={[sG.h_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.bold, sG.h7, sG.text_green_light, sG.text_center]}>The Ugly Duckling</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={[sG.w_100, sG.row_80, sG.ai_center, sG.jc_center, sG.chrow]}>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]} onPress={() => props.handlePress(5)}>
                                <ImageBackground resizeMode='cover' source={require('../../../../assets/audiobooks/aladdin.png')} style={[sG.h_85, sG.w_100, sG.ai_center, sG.jc_center]}>
                                </ImageBackground>
                                <View style={[sG.h_15, sG.w_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.bold, sG.h7, sG.text_green_light, sG.text_center]}>Aladdin And The Magic Lamp</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.w_50, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded]}>
                            </View>
                        </View>
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
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={require('../../../../assets/help2.png')} />
                            </View>
                            <View style={[sG.h_90, sG.w_60, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h6, sG.text_primary]}>En este módulo encontrarás el listado de audiolibros disponibles
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h6, sG.text_primary]}>In this module you will find the list of available audiobooks</Text>
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
