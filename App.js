import React from 'react';
import Login from './components/Login';
import Expos from './components/Expos';
import Eventos from './components/Eventos';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { TabNavigator, StackNavigator, TabView, TabBarBottom } from 'react-navigation';
import Image from 'react-native-remote-svg'
import InfoScreen from './components/InfoScreen';
import AuthScreen from './components/AuthScreen';
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
const TabApp = TabNavigator ({
  welcome: { screen: Login },
  Main:{
    screen: TabNavigator({
    Expos: { 
    screen: Expos, 
    navigationOptions:({navigation}) =>({
      tabBarIcon:({ focused }) => {
        const image = focused 
        ? require('./images/exdegradado.svg')
        : require('./images/expo.svg')
        return (
            <Image 
                source={image}
                style= {{ width: 30, height: 30 }}
            />
        )}})},
  Eventos:{ 
    screen: Eventos, 
    navigationOptions:({navigation}) => ({
      tabBarIcon:({ focused }) => {
        const image = focused 
        ? require('./images/evdegradado.svg')
        : require('./images/evento.svg')
        return (
            <Image 
                source={image}
                style= {{ width: 30, height: 30 }}
            />)}})}
          })}},

{
tabBarOptions:{
  activeTintColor:'black',
  inactiveTintColor:'#666',
  labelStyle:{
    fontFamily:'Avenir-Black'
  }
},
tabBarComponent: TabBarBottom,
tabBarPosition: 'bottom'
  }
);
/*
export default class App extends React.Component {
  render() {
    return (
      <Login></Login>
    );
  }
}*/
export default TabApp;