import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants'
import { Home } from './views/home'
import { StackNavigator} from 'react-navigation'
import 

export default class App extends React.component { render(){
  return (
    <AppNavigator />
  );
  }
}

const AppNavigator = StackNavigator({
  login: {Screen: login}
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AA9F',
    alignItems: 'center'
  },
});



