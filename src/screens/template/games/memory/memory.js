import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Modal, ImageBackground, Image} from 'react-native';
import { sG } from '../../../components/general/styles';


export const MemoryTemplate = props => {
    
    return (
        <View style={[sG.container]}>

            <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                <Text style={[sG.h6, sG.bold, sG.text_center]}>Memory Game</Text>
            </View>

            <View style={[sG.w_100, sG.h_70, sG.ai_center, sG.jc_center]}>
                {this.renderRows.call(this)}
            </View>
            
            <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                <Text style={[sG.h6, sG.bold, sG.text_center]}>{props.score}</Text>
            </View>

            <TouchableOpacity style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_top]} onPress={props.resetCards}>
                <Text style={[sG.h6, sG.bold, sG.text_center, sG.text_white]}>RESET</Text>
            </TouchableOpacity>

        </View>
    );
}
