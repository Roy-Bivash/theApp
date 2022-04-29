import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';



class Maps extends React.Component {
  render() {
    return(
      <View style={styles.globale}>
        <Text style={styles.titre}>Page Maps</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  globale:{
    paddingTop: Constants.statusBarHeight,
    // flex:1,
    // justifyContent:'center'
  },
  titre:{
    textAlign:'center',
    fontSize:30,
    marginLeft:20,
    marginRight:20,
    marginBottom:90,
  }

})

export default Maps;