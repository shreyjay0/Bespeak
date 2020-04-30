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
       <View style={{height: 70; backgroundColor: #ed6d64, justifyContent: 'center', paddingHorizontal: 30, alignItems: 'center', borderWidth: 2, borderColor: '#ed6d64'}}>

       </View>
 <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style= {{color: '#000', fontSize: 20 }}>
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
