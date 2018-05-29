import React from 'react';
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, Image } from 'react-native';
import { storage } from '../firebase.js';
import { Font } from 'expo';
import InfoScreen from './InfoScreen';
import MoreInfo from '../images/info2.png';

export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageUri:'./images/logo.png'
        };
        let imageRef = props.gallery.Imagen;
        storage.ref('imagenes/'+imageRef).getDownloadURL().then(function(url) {
            console.log('Imagen URL',url);
            this.setState({
                imageUri:url
            });
        }.bind(this)).catch(function(error) {
            console.debug('Error',error);
        });
    }

    render() {

        if(!this.props.gallery){
        
            return <View></View>;
        }else{
        
            let gal = this.props.gallery;
            return (
            <View style={styles.container}>
             <View style={styles.centro}>
                <ImageBackground
                    style={styles.image}
                    source={{uri: this.state.imageUri}}>
                    <View style={styles.centro}>
                    <Text style={styles.texto}>{gal.Nombre}</Text>
                    <Text style={styles.name_container}> {gal.Galeria}</Text>
                    <Text style={styles.texto2}>hasta el {gal.Cierre}</Text>
                    <TouchableOpacity 
                        onPress={e => {
                            this.props.onClickInfo(e,gal);
                        }}>
                        <Image style={{width: 100, height: 30}}
                        source={require('../images/info2.png')}/>
                    </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </View>
            </View> 
            );
        }
    }
}

const styles = StyleSheet.create({
    bordered:{
        borderRadius: 1,
        padding : 5,
        borderWidth: 1,
        borderRadius:10,
        borderColor: 'white'
    },
    info_button:{
        color:'white',
        fontSize: 12, 
        fontFamily:'Avenir'
    },
  container: {
    flex:1,
    backgroundColor:'rgba(0,0,0,.8)',
    width:undefined,
    height: undefined,
  },
  image:{
      flex:1,
    width:400,
    height:450,
    elevation: 1,
    shadowRadius: 2,
    shadowOpacity: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,

  },
  name_container:{
    color:'white',
    fontWeight:'bold',
    //fontFamily:'Avenir',
    fontSize: 14,
    
  },
  texto:{
    color:'white',
    fontSize: 18, 
    //fontFamily:'Avenir'
  },
  texto2:{
    color:'white',
    fontSize: 12, 
    //fontFamily:'Avenir'
  },
  centro:{
      flex: 1,
      justifyContent:'center',
    alignItems: 'center',
  }
});
