/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';

const AppNavigator = createStackNavigator(
  {
    home: Home,
    dash: Dashboard
  },
  {
    initialRouteName: "home",
    navigationOptions: null
  }
);

const AppContainer = createAppContainer(AppNavigator); 
export default class App extends Component{
  render(){
    return <AppContainer />;
  }
}


