import {Image, Platform, Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import {StyleSheet} from 'react-native';

export const SubButton = styled.TouchableOpacity`
  width: 100;
  height: 50;
  background-color: #1AAE9F;
  border: 2px solid #000;
  text-align: center;
  padding-top: 10px;
`

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 10
    },

  });
