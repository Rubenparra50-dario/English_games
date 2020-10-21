import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {ExamsQuestionsTemplate} from '../../template/exams/examQuestions';
import { AnimalsQuestionsAnimals } from '../../components/apis/exams/apiQuestionsAnimals';


export default class ExamsQuestions extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        data_animals_questions: AnimalsQuestionsAnimals,
        acum:1,

        //informacion pregunta actual
        data_responses:[],
        pregunta:'',
        nombre_Quiz:'',
        acertadaActual:'',
        acertadas:0,
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
    handlePressResponse = (id) => {
        console.log('***********   '+this.state.acum+'   ***********+')
        if(this.state.acertadaActual === id){
            this.setState({
                acertadas: this.state.acertadas+1,
                acum: this.state.acum+1,
            });
            console.log('acerto')
            this.getQuestions();
        }else if(this.state.acertadaActual != id){
            this.setState({
                acum: this.state.acum+1,
            });
            console.log('fallo')
            this.getQuestions();
        }        
    }

    handlePressAnimals = () => {
        this.props.navigation.navigate('Hanged')
    }

    handlePressFood = () => {
        this.props.navigation.navigate('Memory')
    }

    handlePressOccupations = () => {
        this.props.navigation.navigate('Memory')
    }

    handlePressPlaces = () => {
        this.props.navigation.navigate('Memory')
    }

    handlePressRoutines = () => {
        this.props.navigation.navigate('Memory')
    }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };
  
//--------------------- fin sección de eventos de botones ------------------------

//++++++++++++++++++++++ inicio lógica preguntas +++++++++++++++++++++++
    getQuestions = () => {
        const objeto = AnimalsQuestionsAnimals; 
        objeto.forEach(value => {
            if(value["id"] === this.state.acum){                
                console.log('+++++++++++++++')
                console.log(value["pregunta"])   
                console.log('+++++++++++++++')
                this.setState({
                    data_responses:value["respuestas"],
                    pregunta:value["pregunta"],
                    nombre_Quiz:value["nombre"],
                    acertadaActual:value["respuestaAcertada"],
                })
            }else{
                console.log(value["id"])
            }
        })
    }
//++++++++++++++++++++++ fib lógica preguntas +++++++++++++++++++++++

    componentDidMount () {
        this.getQuestions()
    }

  render () {
    return (
      <ExamsQuestionsTemplate
        alignsecond={this.state.alignsecond}
        visible={this.state.visible}
        AnimalsQuestionsAnimals={AnimalsQuestionsAnimals}
        acum={this.state.acum}
        data_responses={this.state.data_responses}
        pregunta={this.state.pregunta}
        nombre_Quiz={this.state.nombre_Quiz}

        handlePressAnimals={this.handlePressAnimals}
        handlePressFood={this.handlePressFood}
        handlePressOccupations={this.handlePressOccupations}
        handlePressPlaces={this.handlePressPlaces}
        handlePressRoutines={this.handlePressRoutines}
        _toggleBottomNavigationView={this._toggleBottomNavigationView}
        handlePressResponse={this.handlePressResponse}
      ></ExamsQuestionsTemplate>
    )
  }
}