import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';

import Bouton from '../../../components/Bouton';
//import store from 'react-native-simple-store';
import Espacement from '../../../components/Espacement';



class Accueil extends React.Component {
  render() {
    return(
      <View style={styles.globale}>
        <Text style={styles.titre}>Bienvenue dans le monde de la dénonciation</Text>
        <Bouton
          text="Se Connecter"
          onClick={() => this.props.navigation.navigate('PageConnexion') }
          backgroundColor="#85C1E9"
        />
        <Espacement espacement={15}/>
        <Bouton
          text="S'inscrire"
          onClick={() => this.props.navigation.navigate('PageConnexion') }
          backgroundColor="#73C6B6"
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  globale:{
    paddingTop: Constants.statusBarHeight,
    flex:1,
    justifyContent:'center'
  },
  titre:{
    textAlign:'center',
    fontSize:30,
    marginLeft:20,
    marginRight:20,
    marginBottom:90,

  }

})


export default Accueil;