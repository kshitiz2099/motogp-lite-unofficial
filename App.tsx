/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import Router from './src/router/Router';
import TabRouter from './src/router/TabRouterj';

function App(): JSX.Element {
  return(
      <NavigationContainer>
        {/* <Router/> */}
        {/* <NavBar/> */}
        <TabRouter/>
      </NavigationContainer>
    )
}

export default App;
