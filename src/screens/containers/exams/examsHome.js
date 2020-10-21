import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {ExamsHomeTemplate} from '../../template/exams/examsHome';

export default class ExamsHome extends Component {

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

    handlePressAnimals = () => {
        this.props.navigation.navigate('ExamsQuestions')
    }

    handlePressFood = () => {
        this.props.navigation.navigate('ExamsQuestions')
    }

    handlePressOccupations = () => {
        this.props.navigation.navigate('ExamsQuestions')
    }

    handlePressPlaces = () => {
        this.props.navigation.navigate('ExamsQuestions')
    }

    handlePressRoutines = () => {
        this.props.navigation.navigate('ExamsQuestions')
    }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };
  
//--------------------- fin sección de eventos de botones ------------------------


  render () {
    return (
      <ExamsHomeTemplate
       alignsecond={this.state.alignsecond}
       visible={this.state.visible}

       handlePressAnimals={this.handlePressAnimals}
       handlePressFood={this.handlePressFood}
       handlePressOccupations={this.handlePressOccupations}
       handlePressPlaces={this.handlePressPlaces}
       handlePressRoutines={this.handlePressRoutines}
      _toggleBottomNavigationView={this._toggleBottomNavigationView}
      ></ExamsHomeTemplate>
    )
  }
}