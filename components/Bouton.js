import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

class Bouton extends React.Component {
  render(){
    return (
      <View style={styles.globale}>
        <TouchableOpacity 
          onPress={this.props.onClick} 
          style={{
            justifyContent: 'center',
            padding: 10,
            backgroundColor: this.props.backgroundColor,
            borderRadius:8,
          }}
        >
          <Text style={styles.btnText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  globale:{
    
    // marginLeft:10,
    marginHorizontal:20,
  },

  btnText:{
    textAlign:'center',
  }
  
});


export default Bouton;