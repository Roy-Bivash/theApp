import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';

import Bouton from '../../../components/Bouton';
//import store from 'react-native-simple-store';
import Espacement from '../../../components/Espacement';



function Test() {



    return(
      <Text>Bonjour je suis la page test</Text>
    )




}

const styles = StyleSheet.create({

  globale:{
    flex:1,
    justifyContent:'center',
    // margin:10,
    backgroundColor:"#EAF2F8"
  },
  titre:{
    fontSize:50,
    textAlign:'center',
    paddingBottom:20,
  },

  input:{
    backgroundColor: "white",
    width:"80%",
    alignSelf:'center',
    height: 40,
    padding: 10,
    margin:10,
    borderRadius:4,
    textAlign:'center'
  },
})


export default Test;