import React, { Component } from 'react';
import {MemoryTemplate} from '../../../template/games/memory/memory';
import { AsyncStorage, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import Card from '../../../components/games/memory/Card';
import { sG } from '../../../components/general/styles';
import {cards} from '../../../components/apis/games/apiCards';

Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if(i == 0) return this;
    while(--i){
     j = Math.floor(Math.random() * (i + 1));
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
    }
    return this;
}

export default class Memory extends Component {

    constructor(props) {
        super(props);
        // bind the functions to the class
        this.renderCards = this.renderCards.bind(this);
        this.resetCards = this.resetCards.bind(this);
        
        // icon sources
        let sources = {
        'fontawesome': FontAwesome,
        'entypo': Entypo,
        'ionicons': Ionicons
        };    
        
        let clone = JSON.parse(JSON.stringify(cards)); // create a completely new array from the array of cards
 
        this.cards = cards.concat(clone); // combine the original and the clone

        // add the ID, source and set default state for each card
        this.cards.map((obj) => {
            let id = Math.random().toString(36).substring(7);
            obj.id = id;
            obj.src = sources[obj.src];
            obj.is_open = false;
        });

        this.cards = this.cards.shuffle(); // sort the cards randomly
 
        // set the default state
        this.state = {
        current_selection: [], // this array will contain an array of card objects which are currently selected by the user. This will only contain two objects at a time.
        selected_pairs: [], // the names of the icons. This array is used for excluding them from further selection
        score: 0, // default user score
        cards: this.cards // the shuffled cards
        }

    }

    resetCards() {
        // close all cards
        let cards = this.cards.map((obj) => {
          obj.is_open = false;
          return obj;
        });
       
        cards = cards.shuffle(); // re-shuffle the cards
         
        // update to default state
        this.setState({
          current_selection: [],
          selected_pairs: [],
          cards: cards,
          score: 0
        });
    }

    renderRows() {
  
        let contents = this.getRowContents(this.state.cards);
        return contents.map((cards, index) => {
          return (
            <View key={index} style={[sG.h_15, sG.w_90, sG.ai_center, sG.jc_center, sG.chrow]}>
              { this.renderCards(cards) }
            </View>
          );
        });
        
    }

    getRowContents(cards) {
        let contents_r = [];
        let contents = [];
        let count = 0;
        cards.forEach((item) => {
          count += 1;
          contents.push(item);
          if(count == 4){
            contents_r.push(contents)
            count = 0;
            contents = [];
          }
        });
       
        return contents_r;
      
    }

    renderCards(cards) {
        return cards.map((card, index) => {
          return (
            <Card 
              key={index} 
              src={card.src} 
              name={card.name} 
              color={card.color} 
              is_open={card.is_open}
              clickCard={this.clickCard.bind(this, card.id)} 
            />
          );
        });
    }

    clickCard(id) {
        let selected_pairs = this.state.selected_pairs;
        let current_selection = this.state.current_selection;
        let score = this.state.score;
         
        // get the index of the currently selected card
        let index = this.state.cards.findIndex((card) => {
          return card.id == id;
        });
       
        let cards = this.state.cards;
         
        // the card shouldn't already be opened and is not on the array of cards whose pairs are already selected
        if(cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1){
       
          // next: add code for processing the selected card
       
        }    

        
        cards[index].is_open = true;
        current_selection.push({ 
        index: index,
        name: cards[index].name
        });        
        // next: add code for determining whether the user has selected the correct pair or not

        if(current_selection.length == 2){
            if(current_selection[0].name == current_selection[1].name){
              score += 1; // increment the score
              selected_pairs.push(cards[index].name); 
            }else{
              cards[current_selection[0].index].is_open = false; // close the first
               
              // delay closing the currently selected card by half a second.
              setTimeout(() => {
                cards[index].is_open = false;
                this.setState({
                  cards: cards
                });
              }, 500);
            }
           
            current_selection = [];
        }           
        // next: add code for updating the state

        this.setState({
            score: score,
            cards: cards,
            current_selection: current_selection
        });
    }   
    
    render() {
        return (
            <View style={[sG.container]}>
                <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                    <Text style={[sG.h1, sG.bold, sG.text_center, sG.text_green_light]}>Memory Game</Text>
                </View>

                <View style={[sG.w_100, sG.h_70, sG.ai_center, sG.jc_center]}>
                    {this.renderRows.call(this)}
                </View>
                
                <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                    <Text style={[sG.h1, sG.bold, sG.text_center]}>{this.state.score}</Text>
                </View>

                <TouchableOpacity style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded_top]} onPress={this.resetCards}>
                    <Text style={[sG.h6, sG.bold, sG.text_center, sG.text_white]}>RESET</Text>
                </TouchableOpacity>

            </View>
        //   <MemoryTemplate 
        //     // modalVisible={this.state.modalVisible}
        //     // sePulsoBoton={this.sePulsoBoton}
        //   ></MemoryTemplate>
        );
    }
}
