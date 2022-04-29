import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import Axios from 'axios';

import Bouton from '../../../components/Bouton';
//import store from 'react-native-simple-store';
import Espacement from '../../../components/Espacement';






function Connexion(props) {

  const [saisiePseudo, setPseudo] = React.useState("");
  const [saisieMdp, setMdp] = React.useState("");

  const API_URL = "https://mon-app.rbivash.com/getConnexionUser.php?key=azertyuiocvbnfghjbncgjhsdykh&pseudo="+ saisiePseudo +"&mdp=" + saisieMdp;

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if(!loading){
      Alert.alert('vous etes connecter !!')
      props.navigation.navigate('PageTest')
    }

  })

  const getConnexion = async () =>{
    if(saisiePseudo != "" && saisieMdp != ""){
      try{
        const response = await Axios.get(API_URL)
        if(response?.data.id_user){
          setData(response.data)
          setLoading(false)
        }else{
          setPseudo("");
          setMdp("")
          Alert.alert("Les informations saisie sont incorrect")
        }
        
      }catch(erreur){
        console.log('Erreur : ' + erreur)
      }
    }else{
      Alert.alert('Veuillez saisir les informations demandé')
    }
    
  }


    return(
      <SafeAreaView style={styles.globale}>
        <Text style={styles.titre}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          placeholderTextColor="#5D6D7E"
          onChangeText={val => setPseudo(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mots de passe"
          placeholderTextColor="#5D6D7E"
          onChangeText={val => setMdp(val)}
          secureTextEntry={true}
        />
        <Espacement espacement={10}/>
        <Bouton
          text="Se Connecter"
          onClick={() => getConnexion()}
          backgroundColor="#73C6B6"
        />
        <Text></Text>
      </SafeAreaView>
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


export default Connexion;