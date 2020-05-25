/**
 * Criação de duas telas dentro do APP. As telas são Screen1 e Screen2.
 * Além disso possui uma configuração  do header.
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1Example from './Screen1/Index';
import Screen2Example from './Screen2/Index';const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={ Screen1Example } />
        <Stack.Screen name="Screen2" component={ Screen2Example } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
