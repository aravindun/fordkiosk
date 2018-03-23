import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <Image style={{width:320, height:180}} source={require('./fordLogo.png')}  />
        <Text style={styles.textStyle}>FORD KIOSK</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0276b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
  color: 'white',
  fontSize:30,
  }
});
