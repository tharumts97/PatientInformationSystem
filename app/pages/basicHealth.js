import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import { View ,
     Text,
     TouchableOpacity,
     ProgressBarAndroid,
     ScrollView
     } from 'react-native';

import style from '../components/style'

import HealthForm from '../components/healthInfoForm'

export default class BasicHealth extends Component {
    bhealth() {
        Actions.bhealth()
    }

    render() {
        const { parent,signupTxtCont,signupTxt,signupButton,pbar, progBar,form } = style
        return (
            <View style={parent}> 

            <View style={progBar}>
            <ProgressBarAndroid
                        style={pbar}
                     styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.33}
            />
            </View>
            <View style={form}>
            <HealthForm type="HealthForm"/>    
            </View>   
                <ScrollView>
                
                </ScrollView>  
            </View>

        )
    }
}
