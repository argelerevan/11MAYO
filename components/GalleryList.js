import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { database} from '../firebase.js';
import Gallery from './Gallery';
import ListSeparator from './ListSeparator';
import InfoScreen from './InfoScreen';

export default class GalleryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            galeries:[],
            currentGallery:{}
        }
    }

    onClickInfo = (e, gallery) => {
        console.log('WTF', gallery);
        this.setState({currentGallery:gallery});
    }

    componentDidMount(){
        
        let galleriesRef = database.ref('messages').orderByChild('created');
        let galeries = [];   
        galleriesRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {

                var gallery = childSnapshot.val();
                gallery.id = childSnapshot.key;
                galeries.push(gallery);
            
            }); 
            galeries.reverse();
            
            this.setState({
                galeries:galeries
            
            });
        }.bind(this));
        this.onClickInfo = this.onClickInfo.bind(this);
        this.back = this.back.bind(this);
    }

    back(){
        this.setState({currentGallery:{}});
    }

    render() {
        if(!this.state.currentGallery.id){
            let galeriesViews = this.state.galeries.map((g,i) =>{
                return (<View  key={i}>
                        <Gallery gallery={g}
                        onClickInfo={this.onClickInfo}>
                        </Gallery>
                        <ListSeparator></ListSeparator>
                    </View>)
            });
            return (
            <ScrollView style={styles.container}>
                {galeriesViews}
                
            </ScrollView>
            );
        }else{
            return <InfoScreen back={this.back} gallery={this.state.currentGallery}></InfoScreen>
        }
    }
}

const styles = StyleSheet.create({
  container: {
      
    backgroundColor: '#fff'
  }
});
