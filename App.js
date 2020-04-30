import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants'
import { Home } from './views/home'
import { StackNavigator} from 'react-navigation'
import login from './Screens/login'
import {Asset} from 'expo-asset'  
import { AppLoading } from 'expo';
import MusicApp from './app/index';



function cacheImages (images){
  return images.map(image =>{
    if(typeof image=== 'string'){
      return image.prefetch(image);
      }
    else{
      return Asset.fromModule(image).downloadAsync()
      }  
    });
  }
export default class App extends React.component {
constructor(){  
  super()
  this.state={
  isReady=false
  }
}

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/login.jpg')]);

    await Promise.all([...imageAssets]);
  }

/**
 render(){
  return (

    <AppNavigator />
  );
  }
}**/

const AppNavigator = StackNavigator(
  {login: {Screen: login}
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7AA9F',
    alignItems: 'center'
  },
});



