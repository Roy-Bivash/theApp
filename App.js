import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Public_space from './pages/public_space/Public_space';
import Private_space from './pages/private_space/private_space';


export default function App() {


  return (
    <Public_space />
    // <Private_space />
  );
}

