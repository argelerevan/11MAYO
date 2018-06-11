import React, { Component } from 'react';
import {StyleSheet, View, Text, Button, ImageBackground , TouchableOpacity, ScrollView, Linking} from 'react-native';
import { storage } from '../firebase.js';
import { navigation } from 'react-navigation';
import ListSeparator from './ListSeparator';
import { Ionicons } from '@expo/vector-icons';


class InfoScreen extends Component{
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
    render(){
        if(!this.props.gallery){
            return <View></View>;
        }else{
            let gal = this.props.gallery; 
let uriCoordenadas = 'http://maps.google.com/maps?&z=15&mrt=search&t=k&q={gal.lat}+{gal.lng}';
            uriCoordenadas = uriCoordenadas+'@'+gal.lat+','+gal.lng;
        return(

            <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                            <ImageBackground
                                   style={styles.image}
                                   source={{uri: this.state.imageUri}}>
                                               <Button 
                                                   title='<-'
                                                       onPress={() => this.props.back()}/>
                                                              <View style={styles.textinside}>
                                      <Text style={styles.textoimagen2}>{gal.Galeria}</Text>

                                      <View style={styles.logos}>
                                      <TouchableOpacity onPress={() => Linking.openURL(uriCoordenadas)}>
                    <Ionicons name="md-pin" size={28} color="white"/>
                    </TouchableOpacity>            
                    <TouchableOpacity onPress={() => Linking.openURL('indexgalerias.com')}>
<Ionicons name="md-calendar" size={28} color="white"/>
</TouchableOpacity>
</View>
                 </View>
                </ImageBackground>

                <ListSeparator></ListSeparator>
                </View>

           <View style={styles.flex2}>

            <View style={styles.datos}>     
                           <Text style={styles.texto2}>DEL {gal.Apertura} AL {gal.Cierre}</Text>
                         <Text style={styles.textotel}>Dias: {gal.Dias}. {gal.AtencionDe} A {gal.AtencionA} HRS.</Text>
                             <Text style={styles.textotel}>{gal.Telefono} │ {gal.Web}  </Text>
                              </View>

<View style={{width:300, flexDirection: 'row',justifyContent: 'space-around' }}>

<TouchableOpacity onPress={() => Linking.openURL(gal.Facebook)}>
                    <Ionicons name="logo-facebook" size={27} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(gal.Instagram)}>
                    <Ionicons name="logo-instagram" size={27} color="black"/></TouchableOpacity>

                    </View>
                    <View style={{paddingVertical:10, paddingHorizontal:30}}>
                    <Text style={styles.texto}>{gal.Nombre}</Text>
                    </View>
                    <View style={styles.centro}>
                    <Text style={styles.textotel}>{gal.Descripcion}</Text>
                    </View>
         </View>
        </ScrollView>
        );
    }
}
}
const styles = StyleSheet.create({
    logos:{
        width: 100 ,
        height: 100 ,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
 
    },
    textotel:{
            color:'black',
            fontSize: 11, 
            fontFamily:'Avenir'
    },
    flex2:{
flex:3
    },
    datos:{
paddingVertical: 13,
paddingHorizontal: 30,
backgroundColor: 'white'
    },
    textinside:{
        paddingVertical: 120, 
        paddingHorizontal: 22
    },
    ScrollView:{
    },
    textoabajo:{
        flex: 1,
        justifyContent:'center',
      alignItems: 'center',
    },
    textoimagen:
    {
        color:'white',
        fontSize: 17, 
        fontFamily:'Avenir'
    },
    textoimagen2:
    {
        color:'white',
        fontSize: 24, 
        fontFamily:'Avenir'
    },
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
    flex:0,
    backgroundColor:'rgba(0,0,0,.8)',
    width:220,
    height:280,
  },
  image:{
      flex:2,
    width:400,
    height:200,
    elevation: 1,
  },
  name_container:{
    color:'white',
    fontWeight:'bold',
    fontFamily:'Avenir-Black',
    fontSize: 14,
  },
  texto:{
    color:'black',
    fontSize: 18, 
    fontFamily:'Avenir'
  },
  texto2:{
    color:'black',
    fontSize: 14, 
    fontFamily:'Avenir-Black'
  },
  centro:{
      paddingHorizontal: 30,
      flex:1,
      justifyContent:'center',
      width: 300,
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default InfoScreen;