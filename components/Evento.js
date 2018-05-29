import React from 'react';
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, Image } from 'react-native';
import { storage } from '../firebase.js';
import { Font } from 'expo';
import InfoEventos from './InfoEventos';
import MasInfo from '../images/infogris.png'
import ListSeparator from './ListSeparator';

export default class Evento extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageUri:'./images/logo.png'
        };
        let imageRef = props.evento.Imagen;
        storage.ref('imageneseventos/'+imageRef).getDownloadURL().then(function(url) {
            console.log('Imagen URL',url);
            this.setState({
                imageUri:url
            });
        }.bind(this)).catch(function(error) {
            console.debug('Error',error);
        });
    }
    render() {
        if(!this.props.evento){
            return <View></View>;
        }else{
            let egal = this.props.evento;
            return (
            <View style={styles.container}>
               <View style={styles.centro}>
                <ImageBackground
                style={styles.image}
                source={{uri: this.state.imageUri}}
                /> 
                 <ListSeparator></ListSeparator>
                <View style={styles.centro}>
                <Text style={styles.texto}>{egal.Nombre}</Text>
                <Text style={styles.name_container}>{egal.Galeria}</Text>
                <Text style={styles.texto2}>{egal.Cierre}</Text>
               <View style={styles.boton}>
                <TouchableOpacity
             onPress={e => {

                this.props.onClickInfo(e,egal);
                                                 }}>
                                                 
                       <Image style={{width: 165, 
                       height: 37}}
                        source={require('../images/infogris.png')}/>
                    </TouchableOpacity>
                    </View>
                    </View>
        
            </View>
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    boton:{
            
    },
  container: {
    backgroundColor: '#fff',
    width:400,
    height:450
  },
  image:{
    width:500,
    height:250,
    opacity: 10
  },
  name_container:{
    color:'black',
    fontWeight:'bold',
    fontFamily:'Avenir-Black',
    fontSize: 14
  },
  texto:{
    color:'black',
    fontSize: 17, 
    
    fontFamily:'Avenir'
  },
  texto2:{
    color:'black',
    fontSize: 12, 
    fontFamily:'Avenir'
  },
  centro:{
      flex: 1,
      justifyContent:'center',
    alignItems: 'center',
  }
});
