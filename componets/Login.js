import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon, } from 'react-native-elements';
import { StyleSheet, Image, } from 'react-native';




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
                <Button
                    title="Login"
                    type='solid'
                    raised={true}
                    buttonStyle={style.button}
                />
            <View></View>    
                 <Button
                    title="Login"
                    type='solid'
                    raised={true}
                    buttonStyle={style.button}
                />
            </View>
        </View>
        
    )
}

export const style = StyleSheet.create({
    wrap: {
        flex: 1,
        margin: 0,
        padding: 0,
        backgroundColor: 'lightgrey'
    },

    head: {
       flex: 2,
    },

    img: {
        flex: 1,
        height: 50,
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
        backgroundColor: 'lightgrey'
    },
    button: {

    },

})