import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, TextInput } from 'react-native';
import Constants from 'expo-constants';

import Bouton from '../../../components/Bouton';
import Espacement from '../../../components/Espacement';


function Plus(props) {

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  
  const [saisieRecherche, setRecherche] = React.useState("");
  const [saisieCommentaire, setCommentaire] = React.useState("");

  const styles = StyleSheet.create({
    globale:{
      paddingTop: Constants.statusBarHeight,
      backgroundColor:'white',
      opacity: fadeAnim,
      minHeight:"100%",
    },
    titre:{
      textAlign:'center',
      fontSize:30,
      marginLeft:20,
      marginRight:20,
      marginBottom:90,
    },
    carte:{
      marginHorizontal:20,
      backgroundColor:'#FADBD8',
      padding:10,
      minHeight:220,
      borderRadius:10,
    },
    input1:{
      backgroundColor: "white",
      width:"80%",
      alignSelf:'center',
      height: 40,
      padding: 10,
      margin:10,
      borderRadius:4,
      textAlign:'center'
    },
    input2:{
      backgroundColor: "white",
      width:"80%",
      alignSelf:'center',
      padding: 10,
      margin:10,
      borderRadius:4,
      textAlign:'center',
      minHeight:100,
    },
    txtDesc:{
      paddingTop:20,
      textAlign:'center'
    },
  })


  React.useEffect(() => {
    Animated.timing(fadeAnim,{
      toValue: 1,
      duration: 500,
    }).start();
  })



    return(
      <Animated.View style={styles.globale}>
        <Text style={styles.titre}>Page Plus</Text>
        <View style={styles.carte}>
          <Text style={styles.txtDesc}>Recherchez la station</Text>
          <TextInput
            style={styles.input1}
            placeholder="Rechercher"
            placeholderTextColor="#5D6D7E"
            onChangeText={val => setRecherche(val)}
          />
          <TextInput
            style={styles.input2}
            placeholder="Un commentaire ?"
            placeholderTextColor="#5D6D7E"
            onChangeText={val => setCommentaire(val)}
          />
          <Espacement espacement={15}/>
          <Bouton
          text="Signaler"
          onClick={() => getConnexion()}
          backgroundColor="#7DCEA0"
          />
          <Espacement espacement={5}/>
        </View>
      </Animated.View>
    )
  

}


export default Plus;