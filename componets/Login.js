import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon, } from 'react-native-elements';
import { StyleSheet, Image, Text } from 'react-native';




export const Login = () => {
    return(
        <View style={style.wrap}>
            <View style={style.head}>
                <Image source={require('../assets/imgs/cover.png')} style={style.img} />
            </View>
                <View style={style.inputWrap}>
                    <Input
                        inputContainerStyle={style.input}
                        errorStyle={{color: 'red'}}
                        placeholder={'Email'}
                        leftIcon={
                            <Icon
                                iconStyle={style.icon}
                                name='envelope-square'
                                type='font-awesome'
                                size={24}
                                color='grey'
                            />
                        }
                    />
                    <Input
                        inputContainerStyle={style.input}
                        secureTextEntry={true}
                        placeholder={'Password'}
                        leftIcon={
                            <Icon
                                iconStyle={style.icon}
                                name='key'
                                type='font-awesome'
                                size={24}
                                color='grey'
                            />
                        }
                    />
                </View>
            <View style={style.btnWrap}>
                <View style={style.btnLoginWrap}>
                    <Button
                        title="Login"
                        type='solid'
                        raised={true}
                        buttonStyle={style.button}
                    />
                </View>
                <View style={style.btnSignWrap}>
                    <Button
                        title="Sign Up"
                        type='solid'
                        raised={true}
                        buttonStyle={style.btnSign}
                    />
                    </View>
            </View>
            <Text style={style.text}>All rights reserved &copy;</Text>
        </View>
        
    )
}

export const style = StyleSheet.create({
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
        flex: 1,
        
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
    }

})