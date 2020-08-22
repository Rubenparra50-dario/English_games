import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {GamesHomeTemplate} from '../../template/games/gamesHome';

export default class GamesHome extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        status:1,
        id_avatar:'',
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

//--------------------- inicio sección de eventos de botones ----------------------
  handlePressStatus = (id) => {
      this.setState({
        status: id,
      })
  }

  handlePressHanged = () => {
      this.props.navigation.navigate('Hanged')
  }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };
  
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

//   componentDidMount() {
//       this.getIdAvatar()
//   }

  render () {
    return (
      <GamesHomeTemplate
    //   animating={this.state.animating}
       alignsecond={this.state.alignsecond}
    //   status={this.state.status}
       visible={this.state.visible}

    //   //handlePressStatus={this.handlePressStatus}
       handlePressHanged={this.handlePressHanged}
      _toggleBottomNavigationView={this._toggleBottomNavigationView}
      ></GamesHomeTemplate>
    )
  }
}
