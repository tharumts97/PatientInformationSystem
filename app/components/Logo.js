import React, { Component } from 'react';
import {View, 
        Image,
        Text
} from 'react-native';

import style from './style';

export default class Logo extends Component {
    render (){
        const { imagelogo, parent } = style
        return (
            <View style={parent}>
             <Image source={require('../images/1.png')} style={imagelogo}/>
             </View>
        )
    }
}