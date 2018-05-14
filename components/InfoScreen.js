import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class InfoScreen extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'InfoExpos',
            headerLeft: (
                <Button 
                title='Expos'
                 onPress={() => navigation.navigate('Expos')} 
                 backgroundColor="rgba(0,0,0,0)"
                 color="rgba(0,122,255,1)"
                 />
               ),
               style:{
    
               }
            };
        }

    render(){
        return(
            <View>
                    <Text> INFORMACION DE Expos  </Text>
                </View>
        );
    }
}

export default InfoScreen;