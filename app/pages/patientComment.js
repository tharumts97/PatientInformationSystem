import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert
} from 'react-native';

import style from './style';

export default class Comment extends Component {

    
    render (){
        const { input, parent,loginTxt,buttonStyle } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Sickness state</Text>
                <Text>State any comments or syptoms regarding your sickness</Text>
                <TextInput style={input} underlineColorAndroid='#BDBDBD' placeholder="comment on the sickness" />
                

                <TouchableOpacity style={buttonStyle}>
                    <Text>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
