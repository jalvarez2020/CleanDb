import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon, } from 'react-native-elements';
import { StyleSheet, Image, Text } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';





export const SignUp = () => {
    return(
            
            <View style={style.wrap}>
                    <View style={style.head}>
                        <Image source={require('../assets/imgs/cover.png')} style={style.img} />
                    </View>
                    <KeyboardAvoidingView style={{flex:2}} behavior="padding" enabled>
                        <Input
                            autoFocus={true}
                            inputContainerStyle={style.input}
                            placeholder={'Name'}
                            leftIcon={
                                <Icon
                                    iconStyle={style.icon}
                                    name='user'
                                    type='font-awesome'
                                    size={24}
                                    color='grey'
                                    />
                                     }
                                />
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
                    </KeyboardAvoidingView>
                <View style={style.btnWrap}>
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