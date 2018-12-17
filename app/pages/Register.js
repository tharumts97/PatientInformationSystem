import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import { View , Text,TouchableOpacity } from 'react-native';
import style from '../components/style'

import RegForm from '../components/RegForm'

export default class Register extends Component {
    login() {
        Actions.login()
    }

    render() {
        const { parent,signupTxtCont,signupTxt,signupButton } = style
        return (
            <View style={parent}> 
            <RegForm type="SignUp"/>               
            <View style={signupTxtCont}>
                    <Text style={signupTxt}>Alrady have an Account?</Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={signupButton}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
