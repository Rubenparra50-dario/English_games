import React, {Component} from 'react';
import {ExamsWritingTemplate} from '../../template/exams/examsWriting';
import * as Speech from 'expo-speech';
import { QuestionsPlaces } from '../../components/apis/exams/apiWritingPlaces';
import { QuestionsTime } from '../../components/apis/exams/apiWritingTime';

export default class ExamsWriting extends Component{

    constructor(props) { 
        super(props);
        this.state = {
            visible:false,
            alignsecond: false,
            show:false,
            tema:'',
            inputText:'',
            cantidadExamsFinalized:'',
            acum:1,
            acertadas:0,
            textSpeak:'welcome to speec text video',
            
            id_responses:'',
            data_responses:[],
            textSpeak:'',    
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

    onSpeak = () => {
        Speech.speak(this.state.textSpeak,{
        language:'en',
        pitch:1,
        rate:1
        })
    }

    handleInputChange = (text, name) => {
        this.setState({[name]: text});
    }   

    handlePressSend = () => {
        this.setState({acum:this.state.acum +1});
        if(this.state.inputText === this.state.textSpeak){
            this.setState({ acertadas:this.state.acertadas+1, inputText:''});
        }else{
            this.setState({ inputText:''});
        }
        this.getQuestions();
    }  

    getQuestions = () => {
        let objeto;
        const tema =  this.props.navigation.getParam('tema')
        this.setState({tema:tema})
        if(tema===1){
            objeto = QuestionsPlaces;
            this.setState({data_responses:QuestionsPlaces})
        }else if(tema===2){
            objeto = QuestionsTime;
            this.setState({data_responses:QuestionsTime})
        }
        if(this.state.acum != 6){
            objeto.forEach(value => {
                if(value["id"] === this.state.acum){    
                    this.setState({
                        id_responses:value["id"],
                        textSpeak:value["pregunta"],
                    })
                }else{
                    console.log(value["pregunta"])
                }
            })
        }else{
            this.pushExamsFinalized(parseInt(this.state.cantidadExamsFinalized)+1);
            this.setState({
                show:true,
            })
        }
    }

    pushExamsFinalized = async (cantidadExamsFinalized) => {
        await AsyncStorage.setItem('ExamsFinalized', ''+cantidadExamsFinalized);
    };

    pushExamsFinalizedActually = async () => {       
        this.setState({
            cantidadExamsFinalized: await AsyncStorage.getItem('ExamsFinalized')
        });
    };

    _toggleBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };

    handlePressHome = () => {
        this.props.navigation.navigate('ExamsHome')
    }

    componentDidMount(){
        this.getQuestions();
        this.setState({acum:this.state.acum +1});
        this.pushExamsFinalizedActually();
    }

  render(){
    return(
        <ExamsWritingTemplate
        alignsecond={this.state.alignsecond}
        visible={this.state.visible}
        show={this.state.show}
        inputText={this.state.inputText}
        acertadas={this.state.acertadas}
        tema={this.state.tema}
        data_responses={this.state.data_responses}

        _toggleBottomNavigationView={this._toggleBottomNavigationView}
        onSpeak={this.onSpeak}
        handlePressSend={this.handlePressSend}
        handleInputChange={this.handleInputChange}
        handlePressHome={this.handlePressHome}
        ></ExamsWritingTemplate>
    )
  }
}