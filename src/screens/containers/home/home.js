import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {HomeTemplate} from '../../template/home/home';

export default class Home extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      animating: false,
      alignsecond: false,
      status:1,
      id_avatar:'',
      cantidadGamesFinalized:'',
      cantidadExamsFinalized:'',
    };
  }

//--------------------- inicio sección de eventos de botones ----------------------
  handlePressStatus = (id) => {
      this.setState({
        status: id,
      })
  }

  handlePressDictionary = () => {
      this.props.navigation.navigate('DictionaryHome')
  }

  handlePressExamsHome = () => {
    this.props.navigation.navigate('ExamsHome')
  }

  handlePressGamesHome = () => {
    this.props.navigation.navigate('GamesHome')
  }

  handlePressAudioBooksHome = () => {
    this.props.navigation.navigate('AudioBooksHome')
  }
  
  handlePressProfile = async () => {
    let id = await AsyncStorage.getItem('id_avatar');
    if(id===null){
      await AsyncStorage.setItem('id_avatar', ''+1)
      this.props.navigation.navigate('ProfileHome')
    }else{
      this.props.navigation.navigate('ProfileHome')
    }
  }

  getIdAvatar = async () => {        
    this.setState({
        id_avatar: await AsyncStorage.getItem('id_avatar')
    });
  };

  gethGamesFinalizedActually = async () => {        
      this.setState({
        cantidadGamesFinalized: await AsyncStorage.getItem('GamesFinalized')
      });
  };

  gethExamsFinalizedActually = async () => {        
    this.setState({
      cantidadExamsFinalized: await AsyncStorage.getItem('ExamsFinalized')
    });
  };
//--------------------- fin sección de eventos de botones ------------------------

  componentDidMount() {
    //Here is the Trick
    const { navigation } = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('willFocus', () => {
      this.getIdAvatar(),
      this.gethGamesFinalizedActually(),
      this.gethExamsFinalizedActually()
    });
  }

  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
    clearTimeout(this.t);
  }

  render () {
    return (
      <HomeTemplate
      animating={this.state.animating}
      alignsecond={this.state.alignsecond}
      status={this.state.status}
      id_avatar={this.state.id_avatar}
      cantidadGamesFinalized={this.state.cantidadGamesFinalized}
      cantidadExamsFinalized={this.state.cantidadExamsFinalized}

      handlePressGamesHome={this.handlePressGamesHome}
      handlePressDictionary={this.handlePressDictionary}
      handlePressProfile={this.handlePressProfile}
      handlePressExamsHome={this.handlePressExamsHome}
      handlePressAudioBooksHome={this.handlePressAudioBooksHome}
      ></HomeTemplate>
    )
  }
}
