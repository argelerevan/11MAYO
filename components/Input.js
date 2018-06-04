import React from 'react';
import {TextInput, View, Text } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

return(
<View style={containerStyle}>
<Ionicons>  </Ionicons> 
    <TextInput
    secureTextEntry ={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
       />
        
    </View>
);
};
const styles = {
    inputStyle:{
        borderRadius: 40,
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 40, 
        width: 200, 
        paddingHorizontal: 16,
        alignItems:'flex-start',
    },
    labelStyle:{
        fontSize: 15,
        paddingLeft: 20,
        flex: 1

    },
    containerStyle:{
        paddingHorizontal: 7,
        borderRadius: 40,
height :40,
flexDirection:'row',
justifyContent:'space-between',
    }

};

export default Input;