import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';

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

export const HomeTemplate = props => {

    return (
        <View style={[ sG.container, sG.bg_primary]}>
            <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_white, sG.brounded_bottom]}>
                <View style={[sG.h_45, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.brounded]}>
                        <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center, sG.chrow]} source={require('../../../../assets/backgroundStars.jpg')}>
                            <View style={[sG.w_30, sG.h_90, sG.ai_center, sG.jc_center]}>
                                {AvatarList.slice(props.id_avatar-1,props.id_avatar).map((item, key) =>(
                                <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100, sG.jc_end, sG.ai_end]} source={item.url}/>
                                ))}
                            </View>
                            <View style={[sG.w_60, sG.h_90, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.w_90, sG.h_100, sG.jc_center]}>
                                    {AvatarList.slice(props.id_avatar-1,props.id_avatar).map((item, key) =>(
                                    <Text style={[sG.text_white, sG.bold, sG.h6]}>{item.nombre}</Text>    
                                    ))}    
                                    <Text style={[sG.text_white, sG.h7]}>Games finished: {props.cantidadGamesFinalized}</Text>
                                    <Text style={[sG.text_white, sG.h7]}>Exams completed: 0</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                        <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                            <ScrollView>
                                <Text style={[sG.text_secondary, sG.h7, sG.text_center]}>La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas (Jim Ryun).</Text>
                                <Text style={[sG.text_secondary, sG.h7, sG.text_center]}>{'\n'}Motivation is what gets you going, habit is what keeps you going (Jim Ryun).</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                <View style={[sG.h_100, sG.w_90, sG.ai_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                    <MaterialCommunityIcons name="menu" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <Text style={[sG.text_white, sG.bold, sG.h4]}>Main menu</Text>
                </View>
            </View>

            <ScrollView>

                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                        <MaterialCommunityIcons name="circle-slice-4" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <TouchableOpacity style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white, sG.chrow]} onPress={props.handlePressDictionary}>
                        <View style={[sG.h_90, sG.w_25, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/icono_menu_dictionary.png')}/>
                        </View>
                        <View style={[sG.h_90, sG.w_65, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_90, sG.w_90, sG.jc_center]}>
                                <Text style={[sG.text_secondary, sG.bold, sG.h6]}>Dictionary</Text>
                                <Text style={[sG.text_secondary, sG.h7]}>Here you will find the vocabulary used in the application</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                        <MaterialCommunityIcons name="circle-slice-5" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <TouchableOpacity style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white, sG.chrow]} onPress={props.handlePressExamsHome}>
                        <View style={[sG.h_90, sG.w_25, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/exam.png')}/>
                        </View>
                        <View style={[sG.h_90, sG.w_65, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_90, sG.w_90, sG.jc_center]}>
                                <Text style={[sG.text_secondary, sG.bold, sG.h6]}>Exams</Text>
                                <Text style={[sG.text_secondary, sG.h7]}>Here you will find some questionnaires to test your knowledge</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                        <MaterialCommunityIcons name="circle-slice-6" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <TouchableOpacity style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white, sG.chrow]} onPress={props.handlePressAudioBooksHome}>
                        <View style={[sG.h_90, sG.w_25, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/book_audio.png')}/>
                        </View>
                        <View style={[sG.h_90, sG.w_65, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_90, sG.w_90, sG.jc_center]}>
                                <Text style={[sG.text_secondary, sG.bold, sG.h6]}>Audiobooks</Text>
                                <Text style={[sG.text_secondary, sG.h7]}>Here are some audiobooks for your ear training</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                        <MaterialCommunityIcons name="circle-slice-7" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <TouchableOpacity style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white, sG.chrow]} onPress={props.handlePressGamesHome}>
                        <View style={[sG.h_90, sG.w_25, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/play.png')}/>
                        </View>
                        <View style={[sG.h_90, sG.w_65, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_90, sG.w_90, sG.jc_center]}>
                                <Text style={[sG.text_secondary, sG.bold, sG.h6]}>Games</Text>
                                <Text style={[sG.text_secondary, sG.h7]}>Here you will find some games to test your abilities</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.h_90, sG.w_10, sG.jc_center]}>
                        <MaterialCommunityIcons name="circle-slice-8" style={[sG.size_icon, sG.text_white]} />
                    </View>
                    <TouchableOpacity style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white, sG.chrow]} onPress={props.handlePressProfile}>
                        <View style={[sG.h_90, sG.w_25, sG.ai_center, sG.jc_center]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_80, sG.h_80]} source={require('../../../../assets/avatar/profile.png')}/>
                        </View>
                        <View style={[sG.h_90, sG.w_65, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_90, sG.w_90, sG.jc_center]}>
                                <Text style={[sG.text_secondary, sG.bold, sG.h6]}>Profile</Text>
                                <Text style={[sG.text_secondary, sG.h7]}>Here you can edit your user profile</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
