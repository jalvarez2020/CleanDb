import React from 'react';
import { View } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import { StyleSheet } from 'react-native'
import { styles } from '../styles/mainStyles';




export const Login = () => {
    return(
        <View >
            <Input
                inputStyle={style.input}
                errorStyle={{color: 'red'}}
                errorMessage='Please enter a valid email address.'
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
                inputStyle={style.input}
                secureTextEntry={true}
                errorStyle={{color: 'red'}}
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
            <View style={style.button}>
                <Button
                    title="Outline button"
                    type='solid'
                    raised={true}
                    buttonStyle={style.button}
                />
            </View>
        </View>
        
    )
}


const style = StyleSheet.create({
    input: {
            marginBottom: 20,

    },

    icon: {
            marginLeft: -15,
            marginRight: 10,
    },

    button: {
        marginTop: 5,
    }

})