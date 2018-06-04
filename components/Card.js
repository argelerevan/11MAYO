import React from 'react';
import { View } from 'react-native';
//Componente Card -- top rap other component --- props cuando llame props
const Card = (props) => {
return  (
    //RapConteiner aplicamos     //REFERENCE TO PROPS  CHILDREN
    <View style={styles.containerStyle}>
        {props.children}
    </View>
    );
};
// Estilos de la Card
const styles ={
    containerStyle:{
        borderWidth: 1,
        //Redondes
        borderRadius: 40,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

//Exportamos
export default  Card;