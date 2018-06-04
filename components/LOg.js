import React from 'react';
import { StyleSheet, Text, View, Button, Animated, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Image from 'react-native-remote-svg';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
import CardSection from './CardSection';
export default class Login extends React.Component {
state = ({ email:'', password: '', error:'' });
onButtonPress() {
  const{email,password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(() =>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(() => {
            this.setStat({error:'Authentication Failed.'});
      });
    });
}
    
  render() {
    return (
                                <ImageBackground style={styles.container} source={require('../images/GRADIENT.png')}>
      <Image source={require('../images/indexlogo.svg')} style={styles.size}></Image>

      <TextInput style={styles.inputBox}    
                 value={this.state.text}  placeholderTextColor ="#ffffff"
                 onChangeText={email => this.setState({ email })}>
                 <Ionicons name="ios-person" size={15} color="gray"/> </TextInput>

    <TextInput style={styles.inputBox}
                                                 placeholder="Password"
                                                 placeholderTextColor ="#ffffff"
                                                 onChangeText={(password) => this.setState({password})}>
                                               <Ionicons name="md-lock" size={15} color="gray"/></TextInput>
                    
                        <Text style={styles.errorTextStyle}>  {this.state.error}   </Text>
   


    <TouchableOpacity  style={styles.button}
    onPress={() => this.singUpUser(this.state.email,this.state.password)}>
    
                                          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
     <Text style={styles.buttonText}>
                <MaterialCommunityIcons name="facebook" size={15} color="white"/>  INGRESAR CON FACEBOOK</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>
                <MaterialCommunityIcons name="gmail" size={15} color="white"/>INGRESAR CON GOOGLE</Text>
   </TouchableOpacity>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
                            inputBox: {
      padding:10,
      width: 260,
     backgroundColor: 'white',
     borderRadius: 40,
      paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 12},
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
