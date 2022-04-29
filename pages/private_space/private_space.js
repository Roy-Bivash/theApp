import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer, NavigationParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PageAccueil from './vues/Accueil';
import PageSearch from './vues/Search';
import PagePlus from './vues/Plus';
import PageMaps from './vues/Maps';
import PageProfile from './vues/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class Private_space extends React.Component {
  render() {
    return(
      <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ showLabel:false }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'PageAccueil':
                return (
                  <Image source={require('../../assets/icons/home.png')} 
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused? '#17202A' : '#5D6D7E',
                    }}
                  />
                );
              case 'Search':
                return (
                  <Image source={require('../../assets/icons/search.png')} 
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused? '#17202A' : '#5D6D7E',
                    }}
                  />
                );
              case 'Maps':
                return (
                  <Image source={require('../../assets/icons/maps.png')} 
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused? '#17202A' : '#5D6D7E',
                    }}
                  />
                );
              case 'Profile':
                return (
                  <Image source={require('../../assets/icons/profile.png')} 
                    resizeMode='contain'
                    style={{
                      width:25,
                      height:25,
                      tintColor: focused? '#17202A' : '#5D6D7E',
                    }}
                  />
                );
              case 'Plus':
                return (
                  <Image source={require('../../assets/icons/plus.png')} 
                    resizeMode='contain'
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius:50,
                      tintColor: '#FBFCFC',
                      backgroundColor: 'red'
                    }}
                  />
                );
            }
            
          },
        })}
      >
        <Tab.Screen name="PageAccueil" component={PageAccueil} options={{ headerShown:false }} />
        <Tab.Screen name="Search" component={PageSearch} options={{ headerShown:false }} />
        <Tab.Screen name="Plus" component={PagePlus} options={{ headerShown:false }} />
        <Tab.Screen name="Maps" component={PageMaps} options={{ headerShown:false }} />
        <Tab.Screen name="Profile" component={PageProfile} options={{ headerShown:false }} />

      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}

export default Private_space;