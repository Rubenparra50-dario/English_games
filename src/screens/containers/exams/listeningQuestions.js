import React, { Component } from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity, Modal, AsyncStorage} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import { sG } from '../../components/general/styles';
import { BottomSheet } from 'react-native-btr';
import { Audio } from 'expo-av'
import Slider from '../../containers/audiobooks/react-native-slider';
import { AnimalsListeningAnimals } from '../../components/apis/exams/apiListeningAnimals';
import { QuestionsListeningOccupations } from '../../components/apis/exams/apiListeningOccupations';

const thumbTouchSize = { width: 50, height: 50 }

export default class ListeningQuestions extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        acum:1,
        show:false,
        cantidadExamsFinalized:'',
        
        id_avatar:'',
        activeIndex:0,

        //audio
        uriSound:'',
        seek: 0,
        volume: 1,
        isLoaded: false,
        isBuffering: true,
        duration: undefined,

        //informacion pregunta actual
        data_responses:[],
        pregunta:'',
        nombre_Quiz:'',
        acertadaActual:'',
        acertadas:0,
        id_responses:'',
    };

        setTimeout(
            () =>
            this.setState({ align: 'flex-start' }, function() {
                this.setState({
                alignsecond: true,
                });
            }),
            2000
        );
    }

    playSound = async () => {
        await Audio.Sound.createAsync(
        { uri: this.state.uriSound },
        { shouldPlay: true }
        );
    }


    handlePressResponse = (id) => {
        if(this.state.acertadaActual === id){
            this.setState({
                acum: this.state.acum+1,
                acertadas: this.state.acertadas+1,
                uriSound:'',
            });
            console.log('acerto')
            this.getInfo();
        }else{
            this.setState({
                acum: this.state.acum+1,
                uriSound:'',
            });
            console.log('fallo')
            this.getInfo();
        }  
    }

  getInfo = () => {
        let objeto;
        const tema =  this.props.navigation.getParam('tema')
        if(tema===1){
            objeto = AnimalsListeningAnimals;
        }else if(tema===2){
            objeto = QuestionsListeningOccupations;
        }
        if(this.state.acum != 6){
            objeto.forEach(value => {
                if(value["id"] === this.state.acum){    
                    this.setState({
                        id_responses:value["id"],
                        data_responses:value["respuestas"],
                        uriSound:value["pregunta"],
                        nombre_Quiz:value["nombre"],
                        acertadaActual:value["respuestaAcertada"],
                    })
                }else{
                    console.log(value["id"])
                }
            })
        }else{
            this.pushExamsFinalized(parseInt(this.state.cantidadExamsFinalized)+1);
            this.setState({
                show:true,
            })
        }
    }

    handlePressHome = () => {
        this.props.navigation.navigate('ExamsHome')
    }

    pushExamsFinalized = async (cantidadExamsFinalized) => {
        await AsyncStorage.setItem('ExamsFinalized', ''+cantidadExamsFinalized);
    };

    pushExamsFinalizedActually = async () => {       
        this.setState({
            cantidadExamsFinalized: await AsyncStorage.getItem('ExamsFinalized')
        });
    };


//--------------------- inicio sección de eventos de botones ----------------------
  
  handlePress = () => {
      this.props.navigation.navigate('AudioBook')
  }

  _toggleBottomNavigationView = () => {
      this.setState({ visible: !this.state.visible });
  };
  
  componentDidMount () {
        this.getInfo();
        this.pushExamsFinalizedActually();
        this.setState({acum:this.state.acum +1});
  }

//--------------------- fin sección de eventos de botones ------------------------


  render () {
    return (
        <View style={[sG.container, sG.ai_center, sG.jc_center]}>
            {this.state.alignsecond?null:(
                <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <ImageBackground resizeMode='contain' style={[sG.w_50, sG.h_40]} source={require('../../../../assets/gif/loading.gif')} />
                    <View style={[sG.w_90, sG.h_10, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.text_primary, sG.h5, sG.text_center, sG.bold]}>Loading ...</Text>
                    </View>
                </View>
            )} 

            {!this.state.alignsecond ? null : (
                <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../assets/backgroundMolecule.jpg')}>
                    <View style={[sG.h_10, sG.w_90]}></View>
                    <TouchableOpacity style={[sG.h_10, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_light, sG.chrow, sG.brounded, sG.bg_primary]} onPress={this.playSound}>
                        <TouchableOpacity style={[sG.w_20, sG.h_90, sG.ai_center, sG.jc_center]}>
                            <MaterialIcons name="play-arrow" style={[sG.size_icon, sG.text_white]} />
                        </TouchableOpacity>                        
                        <View style={[sG.w_80, sG.h_100, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.h5, sG.text_white, sG.text_center, sG.bold]}>PLAY</Text>
                        </View>
                    </TouchableOpacity>           
                    <View style={[sG.h_5, sG.w_90]}></View>         
                    <View style={[sG.h_50, sG.w_90, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.h_90, sG.w_100, sG.ai_center, sG.jc_center, sG.bg_white, sG.border, sG.brounded, sG.card_shadow]}>
                            {this.state.data_responses.map((item, key) =>(
                                <View style={[sG.w_90, sG.h_20, sG.ai_center, sG.jc_center]}>
                                    <TouchableOpacity style={[sG.w_100, sG.h_80, sG.ai_center, sG.jc_center, sG.border, sG.brounded, sG.chrow]} onPress={() => this.handlePressResponse(item.id)}>
                                        <View style={[sG.w_20, sG.ai_center]}>
                                            <Feather name="check-circle" style={[sG.size_icon, sG.text_green_light]} />
                                        </View>
                                        <View style={[sG.w_80]}>
                                            <Text style={[sG.h5, sG.text_gray_light]}>{item.respuesta}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}   
                        </View>
                    </View>
                    <View style={[sG.h_5, sG.w_90]}></View>    
                    <View style={[sG.w_100, sG.h_20, sG.ai_end, sG.jc_end, sG.bg_primary, sG.brounded_top_left_max]}>
                        <View style={[sG.w_75, sG.h_50, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.w_80, sG.h_90, sG.ai_center, sG.jc_end, sG.chrow]} onPress={this._toggleBottomNavigationView}>
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
                    visible={this.state.visible}
                    //setting the visibility state of the bottom shee
                    onBackButtonPress={this._toggleBottomNavigationView}
                    //Toggling the visibility state on the click of the back botton
                    onBackdropPress={this._toggleBottomNavigationView}
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
                                            <Text style={[sG.h6, sG.text_primary]}>Selecciona la respuesta corresta.</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[sG.h_40, sG.w_100, sG.ai_center, sG.jc_center, sG.chrow]}>
                                <View style={[sG.h_90, sG.w_70, sG.ai_center, sG.jc_center, sG.border, sG.brounded]}>
                                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h6, sG.text_primary]}>Select the correct answer.</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={[sG.h_90, sG.w_20, sG.ai_center, sG.jc_end]} onPress={this._toggleBottomNavigationView}>
                                    <MaterialCommunityIcons name='check-decagram' style={[sG.text_primary, sG.size_icon_md]}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </BottomSheet>

                    {/* inicio modal final */}
                    <Modal animationType="slide" transparent={true} visible={this.state.show}>
                        <View style={[sG.container, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_40, sG.w_80, sG.bg_white, sG.brounded, sG.ai_center, sG.jc_center, sG.card_shadow, sG.border]}>
                            <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.w_100, sG.h_45, sG.ai_center, sG.jc_center, sG.chrow]}>
                                    <View style={[sG.w_45, sG.h_100, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h4, sG.bold, sG.text_green_light]}>Questions</Text>
                                        <Text style={[sG.h2, sG.bold, sG.text_gray_light]}>5</Text>
                                    </View>
                                    <View style={[sG.w_45, sG.h_100, sG.ai_center, sG.jc_center]}>
                                        <Text style={[sG.h4, sG.bold, sG.text_green_light]}>Correct</Text>
                                        <Text style={[sG.h2, sG.bold, sG.text_gray_light]}>{this.state.acertadas}</Text>
                                    </View>
                                </View>
                                <View style={[sG.w_80, sG.h_30, sG.ai_center, sG.jc_center]}>
                                    {this.state.acertadas === 0?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 0%</Text>
                                    :null}
                                    {this.state.acertadas === 1?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 20%</Text>
                                    :null}
                                    {this.state.acertadas === 2?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 40%</Text>
                                    :null}
                                    {this.state.acertadas === 3?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 60%</Text>
                                    :null}
                                    {this.state.acertadas === 4?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 80%</Text>
                                    :null}
                                    {this.state.acertadas === 5?
                                    <Text style={[sG.text_gray_light, sG.text_center, sG.h5]}>your effectiveness is 100%</Text>
                                    :null}
                                </View>
                                <View style={[sG.w_100, sG.h_25, sG.ai_center, sG.jc_center]}>
                                    <TouchableOpacity style={[sG.w_90, sG.h_70, sG.ai_center, sG.jc_center, sG.brounded, sG.bg_green_light]} onPress={this.handlePressHome}>
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(249,250,252)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    slider: {
      alignSelf: 'center',
      width: 315,
      bottom: 0,
    },
  
    thumb: {
      backgroundColor: 'rgb(255 ,255 ,255)',
      shadowColor: 'rgba(0,0,0,0.18)',
      shadowOffset: { height: 10, width: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 12,
    },
  
    track: {
      backgroundColor: 'rgb(235, 235, 235)',
    },
  })
  
  function getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000
    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor(totalSeconds / 60)
  
    return padWithZero(minutes) + ':' + padWithZero(seconds)
  
    function padWithZero(number) {
      const string = number.toString()
  
      if (number < 10) {
        return '0' + string
      }
  
      return string
    }
  }