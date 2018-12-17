import React, { Component } from 'react';
import { 
    View ,
    Text,
    TouchableOpacity 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import style from '../components/style';

import Form from '../components/loginForm';
import Logo from '../components/Logo'

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    cmt() {
        Actions.cmt
    }
       render() {
        const { parent,signupButton,signupTxt,signupTxtCont,buttonStyle,commt } = style
        return (
            
            <View style={parent}>
                <Logo/>   
                <Form type="Login"/>      
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Dont have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={signupButton}>SignUp</Text>
                    </TouchableOpacity>
                </View>           
            </View>

        )
    }
}

//export default Home