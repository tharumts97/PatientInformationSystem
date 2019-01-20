import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import { View ,
     Text,
     TouchableOpacity,
     ProgressBarAndroid,
     ScrollView
     } from 'react-native';

import style from '../components/style'

import ProfileForm from '../components/proPicForm'

export default class ProfilePic extends Component {

    render() {
        const { parent,signupTxtCont,signupTxt,signupButton,pbar, progBar,form } = style
        return (
            <View style={parent}> 

            <View style={progBar}>
            <ProgressBarAndroid
                        style={pbar}
                     styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.66}
            />
            </View>
            <View style={form}>
            <ProfileForm type="ProfileForm"/>    
            </View> 
              
            <View>   
                <ScrollView>
                
                </ScrollView>  
            </View>
            </View>

        )
    }
}
