import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert
} from 'react-native';

import style from './style';

export default class Logo extends Component {

    
    render (){
        const { input, parent,loginTxt,buttonStyle } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Login</Text>
                <TextInput style={input} underlineColorAndroid='#BDBDBD' placeholder="Username" onChangeText={text => this.setState({ username:text})} />
                <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={ text => this.setState({password:text})} />

                <TouchableOpacity style={buttonStyle}>
                    <Text>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
