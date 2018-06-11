import React from 'react';
import { StyleSheet, Text, View, Button, Animated, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Image from 'react-native-remote-svg';
import { Container, Content, Header, Form, Item, Label } from 'native-base';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
import CardSection from './CardSection';
import Card from './Card';
import Input from './Input';
import Spinner from './Spinner';
import { navigation } from 'react-navigation';
import Expo from 'expo';

const id = "573402039727593";

export default class Login extends React.Component {
login = async () => {
  const {type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(id,{ permission: ['public_profile','email', 'user_friends']})
    if(type === 'success'){
const response = await fetch(
);
    } else {
      alert(type);
    }
}

state = { email :'', password:'', error:'', loading: false  };


onButtonPress(){

  const{ email, password } = this.state;
  
  this.setState({ error: '', loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res=>{
    console.log('Correcto');
    this.props.navigation ('Expos');
  })
  .catch((e) => {
    console.log(e);
    console.log('Login fallido');
    /*firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFail.bind(this));*/
  });
}

onLoginFail(){
  this.setState({ error: 'Auth Failed.', loading: false });
}

onLoginSuccess(){
this.setState({ 
email: '',
password:'',
loading: false,
error:''


});
}

Oncomplete = () => {
this.props.navigation ('auth');

}

renderButton(){
  if (this.state.loading ){
return <Spinner size="small" />
  }
  return (
    <TouchableOpacity  
    style={styles.button}
    onPress={this.onButtonPress.bind(this)}>
      <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
   </TouchableOpacity>
  );
}
  render() {
    return (
      
  <ImageBackground style={styles.container} source={require('../images/GRADIENT.png')}>
    <View style={styles.containerdos}>
    <Image source={require('../images/indexlogo.svg')} 
      style={styles.size}></Image>
      <View style={styles.sepa}>
          <CardSection>
            <Ionicons name="ios-person"
              size={25} 
              color="gray"
              style={
                {marginLeft:15, 
                marginTop: 7
              }}/> 
              <Input 
                placeholder="user@gmail.com"
                label = "Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}>
            </Input>
          </CardSection>
          <CardSection>
            <Ionicons name="md-lock" 
              size={20} 
              color="gray"
              style={{
                marginLeft: 15,
                marginTop: 10
              }}/>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}/>
          </CardSection>
        </View>
      </View>
   <View>
     {this.renderButton()}
    </View>
   <TouchableOpacity 
      style={styles.button}
      onPress={() => this.login()}>
    <Text style={styles.buttonText}>
      <MaterialCommunityIcons name="facebook" size={15} color="white"/>INGRESAR CON FACEBOOK</Text>
    </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>
        <MaterialCommunityIcons name="gmail" size={15} color="white"/>INGRESAR CON GOOGLE</Text>
   </TouchableOpacity>
    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
  </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  sepa:{
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
  },
  iconos:{
  },
  errorTextStyle:{
fontSize:20,
alignSelf:'center',
color:'red'},
                          size:{
width:  50,
height: 50,
paddingBottom: 100},
                             container: {
    flex: 1,    
    justifyContent:'center',
    alignItems:'center'},
    containerdos: {
      paddingTop:65,
      flex: 1,    
      justifyContent:'center',
      alignItems:'center'},
                            inputBox: {
   paddingHorizontal: 16,
      width: 240,
      height: 40,
      borderRadius: 40,
     backgroundColor: 'white',
    fontSize: 16,
    marginVertical: 12,
  color:'#ffffff'
  },
                                button:{
    display: 'flex',
    padding:10,
width: 250,
borderRadius: 40,
borderWidth: 1,
borderColor: 'white',
marginVertical: 8,
paddingVertical: 12},
                            buttonText:{
    fontSize: 10,
    fontWeight: '500',
    color: '#ffffff',
    textAlign:'center'
  },
  facebookstyle:{

  }
});