import React, { Component } from 'react';
import {HangedTemplate} from '../../../template/games/hanged/hanged';
import { AsyncStorage } from 'react-native';


export default class Hanged extends Component {
  constructor(props){
    super(props);

    this.sePulsoBoton = this.sePulsoBoton.bind(this);

    let palabra = this.getPalabraAdivinar();

    this.state = {
      numAciertos: 0,
      numFallos: 0,
      palabraAAdivinar: palabra,
      palabraAdivinadaHastaElMomento: this.inicializarPalabraAdivinadaHastaElMomento(palabra),
      botones: this.getBotones(),
      modalVisible: false,
      resultado: '',
      cantidadGamesFinalized:'',
    }
  }

  reiniciar = () =>{
    this.pushGamesFinalizedActually();
    let palabra = this.getPalabraAdivinar();
    
    this.setState({
      numAciertos: 0,
      numFallos: 0,
      palabraAAdivinar: palabra,
      palabraAdivinadaHastaElMomento: this.inicializarPalabraAdivinadaHastaElMomento(palabra),
      botones: this.getBotones(),
      modalVisible: false,
      resultado: ''
    });
  }

  getBotones(){
    let LETRAS = [ "A", "B", "C", "D", "E", "F", "G", 
                    "H", "I", "J", "K", "L", "M", "N",
                    "Ñ", "O", "P", "Q", "R", "S", "T",
                    "U", "V", "W", "X", "Y", "Z" 
                  ];

    return LETRAS.map((l) => ({ letra: l, estado: 'no-pulsado'}));
  }

  getPalabraAdivinar(){
    let PALABRAS = ["COW", "CHICKEN", "HORSE", "PIG", "RABBIT", "SHEEP", "DOLPHIN", "SHARK", "MOUSE", "TIGER"];
    return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
  }

  inicializarPalabraAdivinadaHastaElMomento(palabra){
    let palabraInicializada = "";
    for(let i = 0; i < palabra.length; i++){
      palabraInicializada += "-";
    }
    return palabraInicializada;
  }

  sePulsoBoton = (i)=>{
    
    let botonesAux = this.state.botones;
    let letra = botonesAux[i].letra;

    if(this.hayAcierto(letra)){
      botonesAux[i].estado = "pulsado-acertado";
      this.setState((prevState) => ({
        botones: botonesAux
      }));
    } else {
      botonesAux[i].estado = "pulsado-no-acertado";
      this.setState((prevState) => ({
        botones: botonesAux,
        numFallos: ++prevState.numFallos
      }));
    }
  }

  hayAcierto(letra){
    let acierto = false;

    for(let i = 0; i < this.state.palabraAAdivinar.length; i++){
      if(letra == this.state.palabraAAdivinar.substr(i, 1)){
        this.setState((prevState) => ({
          numAciertos: ++prevState.numAciertos,
          palabraAdivinadaHastaElMomento: prevState.palabraAdivinadaHastaElMomento.substr(0, i) +
                                          letra +
                                          prevState.palabraAdivinadaHastaElMomento.substr(i + 1)
        }));
        acierto = true;
      }
    }

    return acierto;
  }

  pushGamesFinalized = async (cantidadGamesFinalized) => {
    await AsyncStorage.setItem('GamesFinalized', ''+cantidadGamesFinalized);
  };

  pushGamesFinalizedActually = async () => {       
    this.setState({
      cantidadGamesFinalized: await AsyncStorage.getItem('GamesFinalized')
    });
  };

  componentDidMount () {
    this.pushGamesFinalizedActually();
  }

  componentDidUpdate(){
    if(this.state.numFallos == 6){
      this.setState({
        modalVisible: true,
        resultado: '¡You lost!',
        numFallos: 0
      });
    }

    if(this.state.palabraAAdivinar.length == this.state.numAciertos){
      this.setState({
        modalVisible: true,
        resultado: '¡You win!',
        numAciertos: 0
      });
      this.pushGamesFinalized(parseInt(this.state.cantidadGamesFinalized)+1);
    }
  }

  render() {
    return (
      <HangedTemplate 
        modalVisible={this.state.modalVisible}
        botones={this.state.botones}
        numFallos={this.state.numFallos}
        palabraAdivinadaHastaElMomento={this.state.palabraAdivinadaHastaElMomento}
        resultado={this.state.resultado}

        sePulsoBoton={this.sePulsoBoton}
        reiniciar={this.reiniciar}
      ></HangedTemplate>
    );
  }
}
