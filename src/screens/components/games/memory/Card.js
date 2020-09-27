import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // use FontAwesome from the expo vector icons
import { sG } from '../../../components/general/styles';

export default class Card extends React.Component {
 
    render() {
       
      let CardSource = require('../../../../../assets/games/memory/question.jpg'); // set FontAwesome as the default icon source
      let icon_name = 'question-circle';
      let icon_color = '#393939';
       
      if(this.props.is_open){
        icon_name = this.props.name;
        if(this.props.name==='1'){ CardSource = require('../../../../../assets/games/memory/1.jpg'); }
        if(this.props.name==='2'){ CardSource = require('../../../../../assets/games/memory/2.jpg'); }
        if(this.props.name==='3'){ CardSource = require('../../../../../assets/games/memory/3.jpg'); }
        if(this.props.name==='4'){ CardSource = require('../../../../../assets/games/memory/4.jpg'); }
        if(this.props.name==='5'){ CardSource = require('../../../../../assets/games/memory/5.jpg'); }
        if(this.props.name==='6'){ CardSource = require('../../../../../assets/games/memory/6.jpg'); }
        if(this.props.name==='7'){ CardSource = require('../../../../../assets/games/memory/7.jpg'); }
        if(this.props.name==='8'){ CardSource = require('../../../../../assets/games/memory/8.jpg'); }
        if(this.props.name==='9'){ CardSource = require('../../../../../assets/games/memory/9.jpg'); }
        if(this.props.name==='10'){ CardSource = require('../../../../../assets/games/memory/10.jpg'); }
        if(this.props.name==='11'){ CardSource = require('../../../../../assets/games/memory/11.jpg'); }
        if(this.props.name==='12'){ CardSource = require('../../../../../assets/games/memory/12.jpg'); }
      }
       
      return (
        <View style={styles.card}>
          <TouchableOpacity onPress={this.props.clickCard} style={[sG.w_85, sG.h_85, sG.brounded, sG.border]} underlayColor={"#f1f1f1"}>
            {/* <CardSource 
              name={icon_name} 
              size={50} 
              color={icon_color} 
            /> */}
            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100]} source={CardSource}/>
          </TouchableOpacity>   
        </View>
      );
    }
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      alignItems: 'center'
    },
    card_text: {
      fontSize: 50,
      fontWeight: 'bold'
    }
  });