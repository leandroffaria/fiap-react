/**
 * Criação de duas telas dentro do APP. As telas são Screen1 e Screen2.
 * Além disso possui uma configuração  do header.
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Screen1Example from './Screen1/Index';
import Screen2Example from './Screen2/Index';

const AppNavigator = createStackNavigator(
  {
    Screen1: {
      screen: Screen1Example,
    },
    Screen2: {
        screen: Screen2Example,
    },
  },
  {
    initialRouteName: 'Screen1',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    },
  }
);

export default createAppContainer(AppNavigator);