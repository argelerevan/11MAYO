import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { database} from '../firebase.js';
import Evento from './Evento';
import ListSeparator from './ListSeparator';
import InfoEventos from './InfoEventos';

export default class EventoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos:[],
            galeriaseleccionada:{}
        }
    }
//EVENTO 
    onClickInfo = (e, evento) => {
        console.log(':)', evento);
        this.setState({galeriaseleccionada:  evento});
    }


    componentDidMount(){
        let eventosRef = database.ref('eventos');
        let eventos = [];
        eventosRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              
                var evento = childSnapshot.val();
                evento.id = childSnapshot.key;
                eventos.push(evento);
            });
            this.setState ({
                eventos:eventos
            });
        }.bind(this));

        this.onClickInfo = this.onClickInfo.bind(this);
        this.back = this.back.bind(this);
    }
    back(){
        this.setState({galeriaseleccionada:{}});
    }
    render() {
        if(!this.state.galeriaseleccionada.id){
        let eventosViews = this.state.eventos.map((e,k) =>{
            return (<View  key={k}>
                    <Evento evento={e}
                    onClickInfo={this.onClickInfo}
                    >
                    </Evento>
                </View>)
        });
        return (
        <ScrollView style={styles.container}>
            {eventosViews}
        </ScrollView>
        );
    }else{
        return <InfoEventos back={this.back} evento={this.state.galeriaseleccionada}></InfoEventos>
    }
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
