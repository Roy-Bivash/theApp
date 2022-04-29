import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated, Alert } from 'react-native';
import Constants from 'expo-constants';

import UserInfos from '../../../components/UserInfos';
import Signalement from '../../../components/Signalement';

class Profile extends React.Component {

  render() {

    return(
      <View style={styles.globale}>

        <View style={styles.profileContainer}>
          <UserInfos
            profileImgSource={require('../../../assets/snack-icon.png')}
            nbSignaux="1243" 
            nbLike="23498" 
            nbFollowing="1231"
            nbFollower="1000"
            txtNomPrenom="Elon Musk" 
            txtUserName="elonMusk23" 
            txtDescription="Ceci est la description du profile" 
          />
          <ScrollView>

          </ScrollView>
        </View>
        <ScrollView style={styles.historyContainer} >

          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />
          <Signalement 
            text="Chatelet les Halles"
            dateTime="10/32/2323 - 10:10"
            onClick={() => Alert.alert('oui')}
          />

          

        </ScrollView>

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
    marginBottom:20,
  },
  profileContainer:{

  },
  historyContainer:{
    // backgroundColor:'white'
  }

})

export default Profile;