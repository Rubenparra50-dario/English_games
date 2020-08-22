import React, { Component }  from "react"; 
import { StyleSheet, Dimensions, Platform, View, Text, Image, TouchableOpacity,} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createDrawerNavigator,createStackNavigator, createSwitchNavigator} from "react-navigation";
import EStyleSheet from 'react-native-extended-stylesheet';
import { sG } from './src/screens/components/general/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // 6.2.2
import SwiperBegin from './src/screens/containers/start/begin';
import Instructors from './src/screens/containers/start/instructors';
import Home from './src/screens/containers/home/home';
import DictionaryHome from './src/screens/containers/dictionary/dictionaryHome';
import ProfileHome from './src/screens/containers/profile/profileHome';
import Hanged from './src/screens/containers/games/hanged/hanged';
import GamesHome from './src/screens/containers/games/gamesHome';

import Example from "./screens/Example";

// define REM depending on screen width
const entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({
  $rem: entireScreenWidth / 380,
  $colorPrimary: '#5271ff',
  $colorSecondary: '#24316b',
  $colorGreenLight: '#00c4cc',
  $colorGrayLight: '#a0a0a0',
  $colorLight: '#f2f2f2',
  $colorRed: '#ea4335',
});

class App extends Component {
  render() {
    return <AppContainer />;
  }
};

const BeginStackNavigator=  createStackNavigator({
  SwiperBegin:{
    screen: SwiperBegin,
    navigationOptions: {
      header: null
    }
  },
  Instructors:{
    screen: Instructors,
    navigationOptions: {
      header: null
    }
  },
});

const HomeStackNavigator=  createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  DictionaryHome:{
    screen: DictionaryHome,
    navigationOptions: ({navigation}) => ({
      title: 'Dictionary',
      headerStyle: {
        backgroundColor: '#5271ff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  ProfileHome:{
    screen: ProfileHome,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#5271ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  Hanged:{
    screen: Hanged,
    navigationOptions: ({navigation}) => ({
      title: 'Hangman',
      headerStyle: {
        backgroundColor: '#5271ff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  GamesHome:{
    screen: GamesHome,
    navigationOptions: ({navigation}) => ({
      title: 'Games',
      headerStyle: {
        backgroundColor: '#5271ff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
});
const AppSwitchNavigator=  createSwitchNavigator({
  Begin: BeginStackNavigator,
  Home: HomeStackNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App;