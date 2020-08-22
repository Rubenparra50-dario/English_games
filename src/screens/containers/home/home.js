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

  handlePressGamesHome = () => {
    this.props.navigation.navigate('GamesHome')
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
//--------------------- fin sección de eventos de botones ------------------------

  componentDidMount() {
    //Here is the Trick
    const { navigation } = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('willFocus', () => {
      this.getIdAvatar()
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

      handlePressGamesHome={this.handlePressGamesHome}
      handlePressDictionary={this.handlePressDictionary}
      handlePressProfile={this.handlePressProfile}
      ></HomeTemplate>
    )
  }
}
