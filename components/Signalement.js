import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


class Signalement extends React.Component{
  render(){
    return(
      <View style={styles.globale}>
        <TouchableOpacity 
          onPress={this.props.onClick} 
          style={styles.bulle}
        >
          <Text style={styles.btnText}>{this.props.text}</Text>
          <Text style={styles.btnText}>{this.props.dateTime}</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  globale:{

    // minHeight:20,
    // backgroundColor:'#EBDEF0',
    // width:"90%",
    // alignSelf:'center'
    paddingLeft:20,
    paddingRight:20,
    paddingTop:4,
    paddingBottom:4,

  },

  bulle:{
    justifyContent: 'center',
    padding: 10,
    backgroundColor:'#EBDEF0',
    borderRadius:15,
    color:'red'
  }



});


export default Signalement;