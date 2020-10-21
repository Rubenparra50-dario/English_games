import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, Image} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';

const url="../../../../assets/boardingDictionary.png";

export const DictionaryHomeTemplate = props => {

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

            <View style={[sG.w_100, sG.h_20, sG.ai_center, sG.jc_center]}>
                {props.data_categories.length===0?
                <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size='large' color='#5271ff'/>
                </View>
                :
                <ScrollView contentContainerStyle={{ width: `${props.percent_per_element * props.data_categories.length }%` }} horizontal={true} showsHorizontalScrollIndicator={false}>

                    {props.data_categories.map((item, key) =>(
                    <TouchableOpacity style={[sG.jc_center, sG.ai_center, sG.h_100, {width: `${100 / props.data_categories.length}%`} ]} onPress={() => props.handlePressCategory(item.id)}>
                        <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center]}>
                                {props.idCategory===item.id?
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100, sG.ai_end, sG.jc_end]} source={require('../../../../assets/icono_menu_dictionary.png')}>
                                    <View style={[sG.h_25, sG.w_100, sG.ai_end, sG.jc_end]}>
                                        <MaterialCommunityIcons name='check-decagram' style={[sG.text_green_light, sG.size_icon]}/>
                                    </View>
                                </ImageBackground>
                                :
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={require('../../../../assets/icono_menu_dictionary.png')}></ImageBackground>
                                }
                            </View>
                            <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                {props.idCategory===item.id?
                                <Text style={[sG.bold, sG.h7, sG.text_center, sG.text_green_light]}>{item.nombre}</Text>
                                :
                                <Text style={[sG.bold, sG.h7, sG.text_center, sG.text_primary]}>{item.nombre}</Text>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))}

                </ScrollView>
                }
            </View>
                
            <View style={[sG.w_100, sG.h_60, sG.ai_center, sG.jc_center]}>
                {props.data_response.length===0?
                <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                    <ActivityIndicator size='large' color='#5271ff'/>
                </View>
                :
                <ScrollView>
                    {props.data_response.map((item, key) =>(
                    <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                        <View style={[sG.h_90, sG.w_10, sG.ai_center, sG.jc_center]}>
                            <MaterialCommunityIcons name='star-circle' style={[sG.text_primary, sG.size_icon]}/>
                        </View>
                        <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.bg_green_light, sG.brounded]}>
                            <Text style={[sG.bold, sG.h7, sG.text_center, sG.text_white]}>{item.title+' - '+item.simple+' - '+item.participle}</Text>                                
                            <Text style={[sG.bold, sG.h7, sG.text_center, sG.text_white]}>{item.meaning}</Text>                              
                        </View>
                    </View>
                    ))}
                </ScrollView>
                }
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
                                        <Text style={[sG.h6, sG.text_primary]}>En este módulo encontraras todo el vocabulario que usarás en la app.{'\n'}Selecciona una categoría.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h6, sG.text_primary]}>In this module you will find all the vocabulary that you will use in the app.{'\n'}Select an category.</Text>
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
