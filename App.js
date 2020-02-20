import React, { Component } from 'react';
import {Image, Platform, Text, View } from 'react-native';
import {styles} from './styles/mainStyles';
import {Login} from './componets/Login';
import {SignUp} from './componets/SignUp';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
        <SignUp/>
    );
  };
};

