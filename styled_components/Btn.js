import React from 'react';
import {Text, View, TouchableOpacity, Icon } from 'react-native';
import styled from 'styled-components/native'

const SubButton = styled.TouchableOpacity`
  width: 150px;
  height: 50;
  background-color: #1AAE9F;
  border: 2px solid #000;
  text-align: center;
  padding-top: 10px;
`

const Txt = styled.Text`
 color: #E8E8E8;
`


const SubBtn = () => {
    return(
        <View>
            <SubButton><Txt>Submit</Txt></SubButton>
        </View>
    )
}


export default SubBtn