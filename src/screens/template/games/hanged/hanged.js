import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Modal, ImageBackground, Image} from 'react-native';
import Imagen from '../../../components/games/hanged/imagen';
import Guiones from '../../../components/games/hanged/guiones';
import Botonera from '../../../components/games/hanged/botonera';
import { sG } from '../../../components/general/styles';


export const HangedTemplate = props => {
    
    return (
        <View style={[sG.container]}>
            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../../assets/backgroundMolecule.jpg')}>
                {props.getModal}
                <View style={[sG.w_100, sG.h_50, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center, sG.bg_green_light, sG.brounded]}>
                        <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <Imagen numFallos={props.numFallos}/>
                        </View>
                    </View>
                </View>
                <View style={[sG.h_10, sG.w_100, sG.jc_center, sG.ai_center]}>
                    <View style={[sG.h_100, sG.w_90, sG.jc_center, sG.ai_center, sG.border, sG.brounded]}>
                        <Guiones palabraAdivinadaHastaElMomento={props.palabraAdivinadaHastaElMomento}/>
                    </View>
                </View>
                <View style={[sG.w_100, sG.h_40, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_80, sG.w_90, sG.jc_center, sG.ai_center, sG.border, sG.brounded]}>
                        <Botonera botones={props.botones} sePulsoBoton={props.sePulsoBoton}/>
                    </View>
                </View>

                
                <Modal  animationType="fade" transparent={true} visible={props.modalVisible} onRequestClose={props.reiniciar}>
                    <View style={[sG.bg_zindex_transparent, sG.container, sG.ai_center, sG.jc_center]}>
                        {props.resultado==='¡You win!'?
                            <View style={[sG.h_40, sG.w_90, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white]}>
                                <View style={[sG.w_90, sG.h_50, sG.ai_center, sG.jc_center]}>
                                    <Image resizeMode='contain' source={require('../../../../../assets/games/general/ganaste.gif')}/>
                                </View>
                                <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h4, sG.bold, sG.text_primary]}>{props.resultado}</Text>
                                </View>
                                <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                                    <TouchableOpacity style={[sG.w_80, sG.h_70, sG.broundedmax, sG.bg_green_light, sG.ai_center, sG.jc_center]} onPress={props.reiniciar}>
                                        <Text style={[sG.h5, sG.bold, sG.text_white, sG.text_center]}>Restart game</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        :
                            <View style={[sG.h_40, sG.w_90, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_white]}>
                                <View style={[sG.w_90, sG.h_50, sG.ai_center, sG.jc_center]}>
                                    <ImageBackground resizeMode='contain' source={require('../../../../../assets/games/general/perdiste.jpg')} style={[sG.h_90, sG.w_100]}/>
                                </View>
                                <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                    <Text style={[sG.h4, sG.bold, sG.text_primary]}>{props.resultado}</Text>
                                </View>
                                <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                                    <TouchableOpacity style={[sG.w_80, sG.h_70, sG.broundedmax, sG.bg_green_light, sG.ai_center, sG.jc_center]} onPress={props.reiniciar}>
                                        <Text style={[sG.h5, sG.bold, sG.text_white, sG.text_center]}>Restart game</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
}
