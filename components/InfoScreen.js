import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { navigation } from 'react-navigation';

class InfoScreen extends Component{

    render(){
        return(
            <View>
                <Button 
                    title='Regresar a expos'
                    onPress={() => this.props.back()} 
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0,122,255,1)"
                />
                <Text> la Galeria seleccionada es {this.props.gallery.Nombre} </Text>
            </View>
        );
    }
}

export default InfoScreen;