import React, { Component } from 'react';
import {Image, Platform, Text, View } from 'react-native';
import {styles} from './styles/mainStyles';
import logo from './assets/logo.png'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Hello World!!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 15,
//   },
//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 10
//   }
// });
