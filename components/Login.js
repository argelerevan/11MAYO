import React from 'react';
import { StyleSheet, Text, View, Button, Animated, TextInput, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default class Login extends React.Component {
    componentDidMount(){
      this.animation.play();
      this.animation.play(30,120);
    }
  render() {
    return (
      <LottieView style={styles.container}
       ref={animation => {
      this.animation = animation;
      }} source = { require('../gradient/gradient.json')}>
      <Image 
                source={require('../images/indexlogo.svg') } 
                style={styles.size}></Image>

        <TextInput style={styles.inputBox} placeholder="Email"
        placeholderTextColor ="#ffffff" >
              <Ionicons name="ios-person" size={15} color="gray"/>
                            </TextInput>
        
         <TextInput style={styles.inputBox}
         secureTextEntry={true}
         placeholder="Password"
        placeholderTextColor ="#ffffff">
         <MaterialCommunityIcons name="lock-outline" size={15} color="gray"/>
        </TextInput>
   <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>
     INICIAR SESIÓN</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>
     <MaterialCommunityIcons name="facebook" size={15} color="white"/>INGRESAR CON FACEBOOK</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>
     <MaterialCommunityIcons name="gmail" size={15} color="white"/>INGRESAR CON GOOGLE</Text>
   </TouchableOpacity>
    </LottieView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent:'center',
    alignItems:'center',
  },
  inputBox: {
    padding:10,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 12
  },
  button:{
    display: 'flex',
    padding:10,
width: 250,
borderRadius: 40,
borderWidth: 1,
borderColor: 'white',
marginVertical: 8,
paddingVertical: 12

  },
  buttonText:{
    fontSize: 10,
    fontWeight: '500',
    color: '#ffffff',
    textAlign:'center'
  },
  facebookstyle:{

  }
});
