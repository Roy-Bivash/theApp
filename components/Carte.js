import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Carte extends React.Component {
  render(){
    return (
      <View style={styles.globale}>
        <Text>Bonjour</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  globale:{
    
    // marginLeft:10,
    marginHorizontal:20,
    backgroundColor:'white',
    padding:10,
  },
  
});


export default Carte;