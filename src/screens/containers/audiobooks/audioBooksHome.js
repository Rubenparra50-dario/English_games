import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {AudioBooksHomeTemplate} from '../../template/audiobooks/audioBooksHome';

export default class AudioBooksHome extends Component {

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
  
  handlePressHanged = () => {
      this.props.navigation.navigate('Hanged')
  }

  handlePressMemory = () => {
    this.props.navigation.navigate('Memory')
  }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };
  

//--------------------- fin sección de eventos de botones ------------------------


  render () {
    return (
      <AudioBooksHomeTemplate
       alignsecond={this.state.alignsecond}
       visible={this.state.visible}

       handlePressHanged={this.handlePressHanged}
       handlePressMemory={this.handlePressMemory}
      _toggleBottomNavigationView={this._toggleBottomNavigationView}
      ></AudioBooksHomeTemplate>
    )
  }
}
