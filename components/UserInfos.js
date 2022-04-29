import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';


class UserInfos extends React.Component{
  render(){
    return(
      <View style={styles.global}>

        <Image style={styles.profileImg} source={this.props.profileImgSource} />
        <Text style={styles.txtProfile}>{this.props.txtUserName}</Text>

        <View style={styles.row}>
          <View style={styles.viewInfos}>
            <Text style={styles.nbInfos}>{this.props.nbSignaux}</Text>
            <Text style={styles.txtInfos}>Signaux</Text>
          </View>
          <View style={styles.viewInfos}>
            <Text style={styles.nbInfos}>{this.props.nbLike}</Text>
            <Text style={styles.txtInfos}>J'aimes</Text>
          </View>
          <View style={styles.viewInfos}>
            <Text style={styles.nbInfos}>{this.props.nbFollowing}</Text>
            <Text style={styles.txtInfos}>Abonnées</Text>
          </View>
          <View style={styles.viewInfos}>
            <Text style={styles.nbInfos}>{this.props.nbFollower}</Text>
            <Text style={styles.txtInfos}>Abonnements</Text>
          </View>
        </View>

        <View style={styles.txtDescNom}>
          <Text style={styles.txtNom}>{this.props.txtNomPrenom}</Text>
          <Text style={styles.txtDesc}>{this.props.txtDescription}</Text>
        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  global: {
    backgroundColor:'white',
    borderBottomColor: '#F2F3F4',
    borderBottomWidth: 1,
  },
  profileImg:{
    backgroundColor:'#FDFEFE',
    width: 90,
    height:90,
    borderRadius:45,
    marginTop:50,
    marginBottom:10,
    alignSelf:'center'
  },
  txtProfile:{
    fontSize:25,
    textAlign: 'center',
  },
  txtNom:{
    fontSize:14,
    fontWeight: "bold"    
  },
  // viewImg:{
  //   width:120,
  //   alignSelf:'center'
  // },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight:15,
  },
  nbInfos:{
    textAlign:'center',
    fontSize:16,
    fontWeight: "bold"
  },
  txtInfos:{
    textAlign:'center',
    fontSize:13,
  },
  viewInfos:{
    height:120,
    justifyContent: "center",
    padding:10,
  },
  txtDesc:{
    fontSize:14,
  },
  txtDescNom:{
    margin:20,
  },


});


export default UserInfos;