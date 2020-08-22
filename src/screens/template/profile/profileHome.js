import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, TextInput, AsyncStorage, Modal} from 'react-native';
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';

const url="../../../../assets/boardingProfile.png";
const baseUrl='../../../../assets/avatar/';
const avatarUrl="avatar1.png";
const image = require("../../../../assets/avatar/avatar1.png");

const AvatarList =[
    {
        "id":1,
        "url":require("../../../../assets/avatar/avatar1.png"),
        "nombre":"Noha",
    },
    {
        "id":2,
        "url":require("../../../../assets/avatar/avatar2.png"),
        "nombre":"James",
    },
    {
        "id":3,
        "url":require("../../../../assets/avatar/avatar3.png"),
        "nombre":"Ethan",
    },
    {
        "id":4,
        "url":require("../../../../assets/avatar/avatar4.png"),
        "nombre":"Jayden",
    },
    {
        "id":5,
        "url":require("../../../../assets/avatar/avatar5.png"),
        "nombre":"Emma",
    },
    {
        "id":6,
        "url":require("../../../../assets/avatar/avatar6.png"),
        "nombre":"Sophia",
    },
    {
        "id":7,
        "url":require("../../../../assets/avatar/avatar7.png"),
        "nombre":"Chloe",
    },
    {
        "id":8,
        "url":require("../../../../assets/avatar/avatar8.png"),
        "nombre":"Lily",
    }
]

export const ProfileHomeTemplate = props => {

    return (
      <View style={[ sG.container, sG.bg_white]}>
        {props.alignsecond?null:(
          <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
            <ImageBackground source={require(url)} style={[sG.container, sG.w_100, sG.ai_center, sG.jc_center]}>
            </ImageBackground>
          </View>
        )}

        {!props.alignsecond ? null : (
          <View style={[ sG.container, sG.bg_green_light]}>

            <View style={[sG.w_100, sG.h_35, sG.ai_center, sG.jc_center, sG.bg_white]}>
                <View style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_bottom]}>
                    <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../assets/backgroundProfileHeader.png')}>
                        <TouchableOpacity style={[sG.w_35, sG.h_50, sG.ai_center, sG.jc_center]} onPress={props.handleShowModal}>
                            {AvatarList.slice(props.id_avatar-1,props.id_avatar).map((item, key) =>(
                            <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100, sG.jc_end, sG.ai_end]} source={item.url}>
                                <View style={[sG.w_35, sG.h_35, sG.ai_center, sG.jc_center]}>
                                    <Entypo name='instagram-with-circle' style={[sG.text_primary, sG.size_icon_ls]}/>
                                </View>
                            </ImageBackground>
                            ))}
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
            
            <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                <View style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center, sG.bg_white, sG.brounded_bottom]}>
                    <View style={[sG.w_100, sG.h_25, sG.ai_center, sG.jc_center]}>
                        {AvatarList.slice(props.id_avatar-1,props.id_avatar).map((item, key) =>(
                            <Text style={[sG.h3, sG.text_green_light, sG.bold]}>{item.nombre}</Text>               
                        ))}     
                    </View>
                    <View style={[sG.w_100, sG.h_15, sG.ai_center, sG.jc_center]}>
                        <Text style={[sG.h5, sG.text_green_light, sG.bold]}>Your activity!</Text>                    
                    </View>
                    <View style={[sG.w_100, sG.h_50, sG.ai_center, sG.jc_center, sG.chrow]}>
                        <View style={[sG.w_30, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/icono_menu_dictionary.png')}/>
                            </View> 
                            <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                <Text style={[sG.h8, sG.text_primary, sG.bold]}>Dictionary (1)</Text>
                            </View> 
                        </View>   

                        <View style={[sG.w_30, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/exam.png')}/>
                            </View> 
                            <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                <Text style={[sG.h8, sG.text_primary, sG.bold]}>Exams (1)</Text>
                            </View> 
                        </View>  

                        <View style={[sG.w_30, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center]}>
                                <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/play.png')}/>
                            </View> 
                            <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                <Text style={[sG.h8, sG.text_primary, sG.bold]}>Games ({props.cantidadGamesFinalized})</Text>
                            </View> 
                        </View>                    
                    </View>
                </View>
            </View>
            
            <View style={[sG.w_100, sG.h_15, sG.ai_center, sG.jc_center]}>
                <View style={[sG.w_90, sG.h_90, sG.jc_center]}>
                    <TouchableOpacity style={[sG.w_60, sG.h_70, sG.ai_center, sG.chrow]} onPress={props.handlePressHome}>
                        <View style={[sG.w_25, sG.h_100, sG.ai_end, sG.jc_center]}>
                            <AntDesign name='leftcircle' style={[sG.text_white, sG.size_icon]}/>
                        </View>
                        <View style={[sG.w_75, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.bold, sG.text_white, sG.h3]}>Go to home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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

            {/* inicio modal avatar */}
            <Modal animationType='fade' transparent={true} visible={props.show}>
                <View style={[sG.container, sG.jc_center, sG.ai_center]}>

                    <View style={[sG.h_90, sG.w_90, sG.brounded, sG.border, sG.bg_white, sG.jc_center, sG.ai_center]}>

                        <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.h5, sG.text_green_light, sG.bold]}>Select an avatar</Text>
                        </View>

                        <ScrollView>
                            {AvatarList.map((item, key) =>(
                            <View style={[sG.row_40, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <TouchableOpacity style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.border, sG.brounded, sG.chrow]} onPress={()=>props.handleSelectAvatar(item.id)}>
                                    <View style={[sG.h_80, sG.w_30, sG.ai_center, sG.jc_center]}>
                                        <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={item.url}/>
                                    </View>
                                    <View style={[sG.h_80, sG.w_60, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h5, sG.text_primary, sG.bold]}>{item.nombre}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            {/* fin modal avatar */}

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
                                        <Text style={[sG.h6, sG.text_primary]}>En este módulo puedes editar tu perfil de usuario y usar un nuevo avatar.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h6, sG.text_primary]}>In this module you can edit your user profile and use a new avatar.</Text>
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
