import React, { Component } from 'react';
import {Text, View, ImageBackground} from 'react-native';
import { sG } from '../../components/general/styles';
import {AudioBookTemplate} from '../../template/audiobooks/audioBook';
import Carousel from 'react-native-snap-carousel';

export default class AudioBook extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        status:1,
        id_avatar:'',
        activeIndex:0,
        carouselItems: [],
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

    getInfo = () => {
        this.setState({carouselItems: ApiCroag,})
    }

    _renderItem({item,index}){
        return (
            <View style={[sG.w_95, sG.h_95, sG.bg_green_light, sG.brounded, sG.border, sG.card_shadow, sG.m_l_xs, sG.ai_center, sG.jc_center]}>
                <ImageBackground resizeMode='cover' style={[sG.w_95, sG.h_95]} source={require('../../../../assets/audiobooks/fondoPagina.png')}>
                    <View style={[sG.w_95, sG.h_95, sG.ai_center, sG.jc_center]}>
                        {item.imagePrincipal != ''?
                        <View style={[sG.w_80, sG.h_70, sG.brounded]}>
                            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100]} source={item.imagePrincipal}></ImageBackground>
                        </View>
                        :null}
                        {item.imageSecundaria != '' && item.imagePrincipal === ''?
                        <View style={[sG.w_80, sG.h_40, sG.brounded]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={item.imageSecundaria}></ImageBackground>
                        </View>
                        :null}
                        <View style={[sG.w_90, sG.ai_center]}>                            
                            {item.title != ''?
                            <Text style={[sG.h1, sG.text_center, sG.text_white, sG.bold]}>{item.title}</Text>
                            :null}
                            {item.text != ''?
                            <Text style={[sG.h6, sG.text_center, sG.text_white]}>{item.text}</Text>
                            :null}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

//--------------------- inicio sección de eventos de botones ----------------------
  
  handlePress = () => {
      this.props.navigation.navigate('AudioBook')
  }

  _toggleBottomNavigationView = () => {
      this.setState({ visible: !this.state.visible });
  };
  
  componentDidMount () {
        this.getInfo();
  }

//--------------------- fin sección de eventos de botones ------------------------


  render () {
    return (
        <View style={[sG.container, sG.bg_secondary, sG.ai_center, sG.jc_center]}>
            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../assets/backgroundMolecule.jpg')}>
                <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center]}>
                    <Carousel
                    layout={"stack"}
                    layoutCardOffset={`18`}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={400}
                    itemWidth={400}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
                <View style={[sG.h_10, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_primary]}></View>
            </ImageBackground>
        </View>
    )
  }
}

const ApiCroag =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/frog.png'),
        imageSecundaria:require('../../../../assets/audiobooks/frog.png'),
        title:"A frog he would a-wooing go",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog.png'),
        title:"",
         text: "Personable and dapper,RinRin Froggie. Big Mom Toad’s kid. emerged this a.m.from their pond dressed to kill in Bermuda shorts, gaudy cravat, round Derby hat and mini-cutaway. “Hey, boy, stay home!” bellows Big Mom. Ignoring her command, he fastens his exit.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog1.png'),
        title:"",
        text: "On the road, he meets Junior Mouse, a friendly neighbor, who bids him to join a fun party at Miss Mouse’s where there’s always plenty of booze and grub.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog2.png'),
        title:"",
        text: "Led by the playboy rodent, they soon arrive at her door, and Junior Mouse knocks with elegant flair and greets their  hostess: “At your feet, Miss Mouse. Are you home for visitors?”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog3.png'),
        title:"",
        text: "“Yes indeed, my dear boy, and  most pleased to see you. I was busy at my craft spinning cotton, but that doesn’t matter: welcome both to my home.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog4.png'),
        title:"",
        text: "They smile, bow, shake hands, and Junior, apt at such things, breaks the ice: “Please, Miss, offer some beer to my green-hued chum who’s hot and thirsty to boot.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog5.png'),
        title:"",
        text: "While errant boy RinRin empties a pitcher of brew, the hostess brings out a guitar and begs him to sing happy lyrics, elegant tunes.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog6.png'),
        title:"",
        text: "“I’ll be delighted, Miss, but right now my throat is parched like dry burlap and my new clothes a bit too tight.” “I’m sorry about your plight,” cajoles Miss Mouse, “Please loosen tie and vest while I sing in your honor a most singular tune.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog7.png'),
        title:"",
        text: "In the midst of this joyful soirée of of beer, dance. guitar and singing, Mamma Cat and her kittens troop in trough the door,   and mayhem ensues: Mamma grabs Junior by an ear, mewing “Hallo!” and the kittens take hold of Miss Mouse by her paws and her tail.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog8.png'),
        title:"",
        text: "In the face of such invasion, RinRin puts on his hat, opens the door with his paws and snout, bids all a fine evening, and takes a colossal leap.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog9.png'),
        title:"",
        text: "He keeps leaping so fast and so high that he looses his hat, tears to pieces his shirt, and plump! Lands inside the beak of a glutton duck that swallows him in one gulp.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog10.png'),
        title:"",
        text: "So, one, two, three, Junior and Miss Mouse meet their end first, followed by RinRin Froggie: the cats dined, the duck supped, and Big Mom Toad was left all alone.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]