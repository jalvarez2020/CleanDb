import {Image, Platform, Text, View, Button, TouchableOpacity } from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

  wrap: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: '#d3d3d3'
},

  head: {
    flex: 2,
 },

 img: {
     width: '100%',
     height: '80%',
     
 },

 inputWrap: {
     flex: 1,
 },

 input: {
     marginVertical: 20,
     marginHorizontal: 50,
 },

 icon: {
         marginLeft: -15,
         marginRight: 10,
 }, 
 btnWrap: {
     flex: 1,
     marginVertical: 10,
     marginHorizontal: 70,
     backgroundColor: '#d3d3d3'
 },
 btnLoginWrap: {
     marginVertical: 10,
 },

 btnLogin: {
     backgroundColor: '#1aae9f',
 },

 btnSignWrap: {
     marginVertical: 10,
 },

 btnSign: {
     backgroundColor: '#D3455B'
 },

 text: {
     textAlign: 'center',
     color: '#212931',
     marginVertical: 15,
 },
    
  btnSubmit: {
    backgroundColor: '#1aae9f',
},

  });
