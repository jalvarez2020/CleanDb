import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon, } from 'react-native-elements';
import { StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import {styles} from '../styles/mainStyles.js'




export const Login = () => {
    return(
        <View style={styles.wrap}>
            <View style={styles.head}>
                <Image source={require('../assets/imgs/cover.png')} style={styles.img} />
            </View>
                        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                                <Input
                                    autoFocus={true}
                                    inputContainerStyle={styles.input}
                                    errorStyle={{color: 'red'}}
                                    placeholder={'Email'}
                                    leftIcon={
                                        <Icon
                                            iconStyle={styles.icon}
                                            name='envelope-square'
                                            type='font-awesome'
                                            size={24}
                                            color='grey'
                                        />
                                    }
                                />
                                <Input
                                    inputContainerStyle={styles.input}
                                    secureTextEntry={true}
                                    placeholder={'Password'}
                                    leftIcon={
                                        <Icon
                                            iconStyle={styles.icon}
                                            name='key'
                                            type='font-awesome'
                                            size={24}
                                            color='grey'
                                        />
                                    }
                                />
                        </KeyboardAvoidingView>
            <View style={styles.btnWrap}>
                <View style={styles.btnLoginWrap}>
                    <Button
                        title="Login"
                        type='solid'
                        raised={true}
                        buttonStyle={styles.btnLogin}
                    />
                </View>
                <View style={styles.btnSignWrap}>
                    <Button
                        title="Sign Up"
                        type='solid'
                        raised={true}
                        buttonStyle={styles.btnSign}
                    />
                </View>
            </View>
            <Text style={styles.text}>All rights reserved &copy;</Text>
        </View>
        
    )
}
