import React, { Component } from 'react';
import {SwiperBeginTemplate} from '../../template/start/begin';
import { AsyncStorage } from 'react-native';

export default class SwiperBegin extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      animating: false,
      alignsecond: false,
      status:1,
      cantidadGamesFinalized:'0',
    };

    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }

//--------------------- inicio sección de eventos de botones ----------------------
  handlePressStatus = (id) => {
      this.setState({
        status: id,
      })
  }

  handlePress = () => {
      this.props.navigation.navigate('Instructors')
  }

  pushGamesFinalized = async () => {
    await AsyncStorage.setItem('GamesFinalized', ''+this.state.cantidadGamesFinalized);
  };
//--------------------- fin sección de eventos de botones ------------------------

  componentDidMount () {
    this.pushGamesFinalized();
  }

  render () {
    return (
      <SwiperBeginTemplate
      animating={this.state.animating}
      alignsecond={this.state.alignsecond}
      status={this.state.status}

      handlePressStatus={this.handlePressStatus}
      handlePress={this.handlePress}
      ></SwiperBeginTemplate>
    )
  }
}
