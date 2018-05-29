import React from 'react';
import Login from './components/Login';
import Expos from './components/Expos';
import Eventos from './components/Eventos';
//import { YellowBox } from 'react-native';
import _ from 'lodash';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Image from 'react-native-remote-svg'
import InfoScreen from './components/InfoScreen';
import { Font } from 'expo';

//YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const TabApp = TabNavigator ({
  Login: { screen: Login, 
      header: null
    },
    InfoScreen:{
        screen: StackNavigator({
          settings:{screen: InfoScreen}
        })
    },
    Expos: { 
      screen: Expos, 
      navigationOptions:({navigation}) =>({
        tabBarIcon: ({ tintColor }) => {
          return (
          <Image
      style={{ width: 30, height: 30 }}
      source={ require('./images/expo.svg')}
       color={tintColor}      />
    );}})},
    Eventos:{ 
      screen: Eventos, 
      navigationOptions:({navigation}) => ({
        tabBarIcon:({ tintColor }) => {
          return (
            <Image
            style= {{ width: 30, height: 30 }}
            source={require('./images/evento.svg')}/>);  
        }
      })
    }
  },
  {
  tabBarOptions:{
    activeTintColor:'black',
    activeBackgroundColor:'#3ee6c1',
    inactiveTintColor:'#666',
    labelStyle:{
      //fontFamily:'Avenir'
    }
  }
  },
  {
    initialRouteName: 'Login'
  });

export default class App extends React.Component {

  componentDidMount(){
    Font.loadAsync({
      'Avenir-Black': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
  }
  render() {
    return (
      <Login></Login>
    );
  }
}
//export default App;
