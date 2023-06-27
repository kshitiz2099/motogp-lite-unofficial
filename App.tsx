/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabRouter from './src/router/TabRouter';

function App(): JSX.Element {
  return(
      <NavigationContainer>
        <TabRouter/>
      </NavigationContainer>
    )
}

export default App;
