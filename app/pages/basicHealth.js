import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import { View ,
     Text,
     TouchableOpacity,
     ProgressBarAndroid
     } from 'react-native';

import style from '../components/style'

import HealthForm from '../components/healthInfoForm'

export default class BasicHealth extends Component {
    bhealth() {
        Actions.bhealth()
    }

    render() {
        const { parent,signupTxtCont,signupTxt,signupButton,pbar } = style
        return (
            <View style={parent}> 

            <View >
            <ProgressBarAndroid
                        style={pbar}
                     styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.33}
            />
            </View>

            <HealthForm type="HealthForm"/>         
            </View>
        )
    }
}
