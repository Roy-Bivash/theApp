import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer, NavigationParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PageAccueil from './vues/Accueil';
import PageConnexion from './vues/Connexion';
import PageTest from './vues/Test';


const Stack = createNativeStackNavigator();


export default function Public_space() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PageAccueil"
            component={PageAccueil}
            options={{ 
              title: 'Acceuil', 
              headerShown: false 
            }}
          />
          <Stack.Screen
            name="PageConnexion"
            component={PageConnexion}
            options={{ 
              title: 'PageConnexion', 
              headerShown: false 
            }}
          />
          <Stack.Screen 
            name="PageTest" 
            component={PageTest} 
            options={{ 
              title: 'PageTest', 
              headerShown: false 
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

