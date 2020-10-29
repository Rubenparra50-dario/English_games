import React, { Component } from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Modal, TextInput} from 'react-native';
import { MaterialCommunityIcons,Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';


const url="../../../../assets/boardingGames.png";

export const ExamsWritingTemplate = props => {

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
            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../assets/backgroundMolecule.jpg')}>
                <View style={[sG.h_10, sG.w_90, sG.ai_center, sG.jc_center]}>
                    {props.tema===1?
                    <Text style={[sG.h5, sG.text_green_light, sG.text_center, sG.bold]}>Prepositions of place</Text>
                    :
                    <Text style={[sG.h5, sG.text_green_light, sG.text_center, sG.bold]}>Prepositions of time</Text>
                    }
                </View>       
                <TouchableOpacity style={[sG.h_10, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_light, sG.chrow, sG.brounded, sG.bg_primary]} onPress={props.onSpeak}>
                    <View style={[sG.w_20, sG.h_90, sG.ai_center, sG.jc_center]}>
                        <MaterialIcons name="play-arrow" style={[sG.size_icon, sG.text_white]} />
                    </View>                        
                    <View style={[sG.w_80, sG.h_100, sG.ai_center, sG.jc_center]}>
                        <Text style={[sG.h5, sG.text_white, sG.text_center, sG.bold]}>PLAY</Text>
                    </View>
                </TouchableOpacity>        
                <View style={[sG.h_5, sG.w_90]}></View>       
                <View style={[sG.h_50, sG.w_90, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_white, sG.border, sG.brounded, sG.card_shadow]}>
                        <TextInput multiline={true} autoCapitalize = 'none' style={[sG.h_60, sG.w_85, sG.h7, sG.border, sG.p_xs]} placeholder='Write the sentence' placeholderTextColor = '#BDBDBD' value={props.inputText} onChangeText={(text)=>props.handleInputChange(text, "inputText")}>
                        </TextInput>
                        <View style={[sG.h_30, sG.w_90, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_green_light, sG.brounded, sG.chrow]} onPress={props.handlePressSend}>
                                <Text style={[sG.h5, sG.text_white, sG.text_center, sG.bold]}>Send </Text>
                                <MaterialIcons name="play-arrow" style={[sG.size_icon, sG.text_white]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>    
                <View style={[sG.h_5, sG.w_90]}></View>    
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
                                        <Text style={[sG.h6, sG.text_primary]}>Escucha el audio y escribe la oración correctamente.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                            <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h6, sG.text_primary]}>Listen the audio and write the sentence correctly.</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={[sG.h_90, sG.w_20, sG.ai_center, sG.jc_end]} onPress={props._toggleBottomNavigationView}>
                                <MaterialCommunityIcons name='check-decagram' style={[sG.text_primary, sG.size_icon_md]}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheet>

                {/* inicio modal final */}
                <Modal animationType="slide" transparent={true} visible={props.show}>
                    <View style={[sG.container, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.h_70, sG.w_90, sG.bg_white, sG.brounded, sG.ai_center, sG.jc_center, sG.card_shadow, sG.border]}>
                        <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.w_90, sG.h_60, sG.jc_center]}>
                                <Text style={[sG.h4, sG.bold, sG.text_green_light, sG.text_center, sG.p_b_sm]}>Answers</Text>
                                {props.data_responses.map((item, key) =>(
                                    <Text style={[sG.h6, sG.bold, sG.text_gray_light]}>{'* '+item.pregunta}</Text>
                                ))}
                            </View>
                            <View style={[sG.w_100, sG.h_20, sG.ai_center, sG.jc_center, sG.chrow]}>
                                <View style={[sG.w_45, sG.h_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h4, sG.bold, sG.text_green_light]}>Questions</Text>
                                    <Text style={[sG.h2, sG.bold, sG.text_gray_light]}>5</Text>
                                </View>
                                <View style={[sG.w_45, sG.h_100, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h4, sG.bold, sG.text_green_light]}>Correct</Text>
                                    <Text style={[sG.h2, sG.bold, sG.text_gray_light]}>{props.acertadas}</Text>
                                </View>
                            </View>
                            <View style={[sG.w_80, sG.h_10, sG.ai_center, sG.jc_center]}>
                                {props.acertadas === 0?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 0%</Text>
                                :null}
                                {props.acertadas === 1?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 20%</Text>
                                :null}
                                {props.acertadas === 2?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 40%</Text>
                                :null}
                                {props.acertadas === 3?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 60%</Text>
                                :null}
                                {props.acertadas === 4?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 80%</Text>
                                :null}
                                {props.acertadas === 5?
                                <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 100%</Text>
                                :null}
                            </View>
                            <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                                <TouchableOpacity style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_green_light]} onPress={props.handlePressHome}>
                                    <Text style={[sG.text_white, sG.text_center, sG.bold, sG.h6]}>Perfect!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </View>
                </Modal>
                {/* fin modal final */}
            </ImageBackground>
        )}
        </View>
    )
}
