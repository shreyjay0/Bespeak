import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';


const Home=() => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15  }}>Home</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  margin: 8,
  backgroundColor: '#333',
    alignItems: 'center'
  },
});

export { Home }