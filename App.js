import React, { Component } from 'react';
import {Image, Platform, Text, View } from 'react-native';
import {styles} from './styles/mainStyles';
import logo from './assets/imgs/logo.png'
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
        <Text style={styles.instructions, styles.welcome}>Hello World!!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

