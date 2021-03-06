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
        this.props.navigation.navigate('ExamsQuestions',{tema:1})
    }

    handlePressOccupations = () => {
      this.props.navigation.navigate('ExamsQuestions',{tema:2})
    }

    handlePressFood = () => {
        this.props.navigation.navigate('ExamsQuestions',{tema:3})
    }    

    handlePressPlaces = () => {
        this.props.navigation.navigate('ExamsQuestions',{tema:4})
    }

    handlePressRoutines = () => {
        this.props.navigation.navigate('ExamsQuestions',{tema:5})
    }
    
    handlePressListeningAnimals = () => {
      this.props.navigation.navigate('ListeningQuestions',{tema:1})
    }

    handlePressListeningOccupations = () => {
      this.props.navigation.navigate('ListeningQuestions',{tema:2})
    }

    handlePressWritingPlace = () => {
      this.props.navigation.navigate('ExamsWriting',{tema:1})
    }

    handlePressWritingTime = () => {
      this.props.navigation.navigate('ExamsWriting',{tema:2})
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
      handlePressListeningAnimals={this.handlePressListeningAnimals}
      handlePressListeningOccupations={this.handlePressListeningOccupations}
      handlePressWritingTime={this.handlePressWritingTime}
      handlePressWritingPlace={this.handlePressWritingPlace}
      ></ExamsHomeTemplate>
    )
  }
}