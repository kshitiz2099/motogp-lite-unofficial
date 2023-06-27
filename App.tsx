/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import Router from './src/router/Router';

function App(): JSX.Element {
  return(
      <NavigationContainer>
        <Router/>
        <NavBar/>
      </NavigationContainer>
    )
}

export default App;
