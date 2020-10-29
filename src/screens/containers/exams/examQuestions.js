import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {ExamsQuestionsTemplate} from '../../template/exams/examQuestions';
import { AnimalsQuestionsAnimals } from '../../components/apis/exams/apiQuestionsAnimals';
import { QuestionsFood } from '../../components/apis/exams/apiQuestionsFood';
import { QuestionsOccupations } from '../../components/apis/exams/apiQuestionsOccupations';
import { QuestionsPlaces } from '../../components/apis/exams/apiQuestionsPlaces';
import { QuestionsRoutines } from '../../components/apis/exams/apiQuestionsRoutines';

export default class ExamsQuestions extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        acum:1,
        show:false,
        cantidadExamsFinalized:'',

        //informacion pregunta actual
        data_responses:[],
        pregunta:'',
        nombre_Quiz:'',
        acertadaActual:'',
        acertadas:0,
        id_responses:'',
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

    handlePressHome = () => {
        this.props.navigation.navigate('ExamsHome')
    }

    handlePressResponse = (id) => {
        if(this.state.acertadaActual === id){
            this.setState({
                acum: this.state.acum+1,
                acertadas: this.state.acertadas+1,
            });
            console.log('acerto')
            this.getQuestions();
        }else{
            this.setState({
                acum: this.state.acum+1,
            });
            console.log('fallo')
            this.getQuestions();
        }  
    }

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };
  
//--------------------- fin sección de eventos de botones ------------------------

//++++++++++++++++++++++ inicio lógica preguntas +++++++++++++++++++++++
    getQuestions = () => {
        let objeto;
        const tema =  this.props.navigation.getParam('tema')
        if(tema===1){
            objeto = AnimalsQuestionsAnimals;
        }else if(tema===2){
            objeto = QuestionsOccupations;
        }else if(tema===3){
            objeto = QuestionsFood;
        }else if(tema===4){
            objeto = QuestionsPlaces;
        }else if(tema===5){
            objeto = QuestionsRoutines;
        }
        if(this.state.acum != 6){
            objeto.forEach(value => {
                if(value["id"] === this.state.acum){                
                    // console.log('+++++++++++++++')
                    // console.log(value["pregunta"])   
                    // console.log('+++++++++++++++')
                    this.setState({
                        id_responses:value["id"],
                        data_responses:value["respuestas"],
                        pregunta:value["pregunta"],
                        nombre_Quiz:value["nombre"],
                        acertadaActual:value["respuestaAcertada"],
                    })
                }else{
                    console.log(value["id"])
                }
            })
        }else{
            this.pushExamsFinalized(parseInt(this.state.cantidadExamsFinalized)+1);
            this.setState({
                show:true,
            })
        }
    }
//++++++++++++++++++++++ fib lógica preguntas +++++++++++++++++++++++

    pushExamsFinalized = async (cantidadExamsFinalized) => {
        await AsyncStorage.setItem('ExamsFinalized', ''+cantidadExamsFinalized);
    };

    pushExamsFinalizedActually = async () => {       
        this.setState({
            cantidadExamsFinalized: await AsyncStorage.getItem('ExamsFinalized')
        });
    };

    componentDidMount () {
        this.getQuestions();
        this.setState({acum:this.state.acum +1});
        this.pushExamsFinalizedActually();
    }

  render () {
    return (
      <ExamsQuestionsTemplate
        alignsecond={this.state.alignsecond}
        visible={this.state.visible}
        show={this.state.show}
        acum={this.state.acum}
        data_responses={this.state.data_responses}
        pregunta={this.state.pregunta}
        nombre_Quiz={this.state.nombre_Quiz}
        acertadas={this.state.acertadas}

        _toggleBottomNavigationView={this._toggleBottomNavigationView}
        handlePressResponse={this.handlePressResponse}
        handlePressHome={this.handlePressHome}
      ></ExamsQuestionsTemplate>
    )
  }
}