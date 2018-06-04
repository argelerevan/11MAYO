import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//FUNCTIONAL COMPONENT
//ContainerChildComponents
const CardSection = (props) => {
return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
    );
};

const styles = {
    icono:{

    },
    containerStyle: {
        //
        borderBottomWidth: 1,
        borderRadius: 40,
        padding: 5,
        backgroundColor: '#fff',
      
        flexDirection: 'row',
        borderColor: '#ddd',
      

        
    }
};

export default CardSection;