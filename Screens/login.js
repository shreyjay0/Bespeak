/* Core */
import React, { Component } from 'react';
/* Presentational */
import { View, Text, Stylesheet, ImageBackground } from 'react-native';

// import styles from './styles';


class login extends Component {

static navigationOptions ={
	header: null
}
  render() {
    return (
    	<View style={{flex:1}}>
             <ImageBackground {source=require('../assets/vector_food_pattern_241247')}
 style={{flex:1}}>

<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

       </View>
 <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       text
       </View>

       </View>
       </View>
    );
  }
}


export default login


const styles = StyleSheet.create({
	container: {
  flex: 1,
  justifyContent: 'center'
  alignItems: 'center'}
});

export default styles;
