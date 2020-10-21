import React, { Component } from 'react';
import {ProfileHomeTemplate} from '../../template/profile/profileHome';
import { AvatarList } from '../../components/apis/profile/apiAvatar';
import { AsyncStorage } from 'react-native';

const percent_per_element = 40;
const num_items = 5;

export default class ProfileHome extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        show: false,
        alignsecond: false,
        data_avatar : [],
        id_avatar:'',
        cantidadGamesFinalized:'0',
        cantidadVisitasDictionary:'0',
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

//¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ asignación de apis ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

    AsignarAvatars = () => {
        this.getIdAvatar();
        this.setState({ data_avatar : AvatarList });
    }

//¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ fin asignación de apis ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

//--------------------- inicio sección de eventos de botones ----------------------
    _toggleBottomNavigationView = () => {
    this.setState({ visible: !this.state.visible });
    };

    handleShowModal = () => {
        this.setState({ show: !this.state.show });
    };

    handleSelectAvatar = async (id_avatar) => {
        await AsyncStorage.setItem('id_avatar', ''+id_avatar);
        this.getIdAvatar();
        this.setState({ show: !this.state.show });
    };

    handlePressHome = () => {
        this.props.navigation.navigate('Home')
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

    gethcantidadVisitasDictionaryActually = async () => {        
      this.setState({
        cantidadVisitasDictionary: await AsyncStorage.getItem('cantidadVisitasDictionary')
      });
    };

//--------------------- fin sección de eventos de botones ------------------------

    componentDidMount (){
        this.AsignarAvatars();
        this.gethGamesFinalizedActually();
        this.gethcantidadVisitasDictionaryActually();
    }

  render () {
    return (
      <ProfileHomeTemplate
      visible={this.state.visible}
      show={this.state.show}
      data_avatar={this.state.data_avatar}
      alignsecond={this.state.alignsecond}
      id_avatar={this.state.id_avatar}
      cantidadGamesFinalized={this.state.cantidadGamesFinalized}
      cantidadVisitasDictionary={this.state.cantidadVisitasDictionary}

      handlePressCategory={this.handlePressCategory}
      _toggleBottomNavigationView={this._toggleBottomNavigationView}
      handleShowModal={this.handleShowModal}
      handlePressHome={this.handlePressHome}
      handleSelectAvatar={this.handleSelectAvatar}
      ></ProfileHomeTemplate>
    )
  }
}
