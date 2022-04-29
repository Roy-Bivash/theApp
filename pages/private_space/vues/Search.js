import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Searchbar } from 'react-native-paper';


class Search extends React.Component {
  render() {
    return(
      <View style={styles.globale}>
        <Text style={styles.titre}>Page Search</Text>
        <Searchbar style={styles.search}
            placeholder="Search"
            //onChangeText={}
            // value={searchValue}
          />
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
    marginBottom:10,
  },
  search: {
    margin:15,
  }

})

export default Search;