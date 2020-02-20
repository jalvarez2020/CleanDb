import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon, } from 'react-native-elements';
import { StyleSheet, Image, Text } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {styles} from '../styles/mainStyles'





export const SignUp = () => {
    return(
            
            <View style={styles.wrap}>
                    <View style={styles.head}>
                        <Image source={require('../assets/imgs/cover.png')} style={styles.img} />
                    </View>
                    <KeyboardAvoidingView style={{flex:2}} behavior="padding" enabled>
                        <Input
                            autoFocus={true}
                            inputContainerStyle={styles.input}
                            placeholder={'Name'}
                            leftIcon={
                                <Icon
                                    iconStyle={styles.icon}
                                    name='user'
                                    type='font-awesome'
                                    size={24}
                                    color='grey'
                                    />
                                     }
                                />
                    <View style={styles.inputWrap}>
                            <Input
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
                            </View>
                    </KeyboardAvoidingView>
                <View style={styles.btnWrap}>
                    <View style={styles.btnSignWrap}>
                        <Button
                            title="Sign Up"
                            type='solid'
                            raised={true}
                            buttonStyle={styles.btnSign}
                            />
                    </View>
                </View>
                <Text style={style.text}>All rights reserved &copy;</Text>
            </View>
    )
}

