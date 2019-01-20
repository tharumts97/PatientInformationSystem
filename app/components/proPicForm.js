import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert,
        ScrollView
} from 'react-native';
import style from './style';

export default class HealthForm extends Component {
   /* constructor(props){
        super(props)
        this.state = {
            apiData: [],
            naData: []
        }
        this.id = null;
        this.height = null;
        this.weight = null;
        this.bld=null;
        this.bmi = null;
        this.bp = null;
        this.sugar = null;
        this.cholesterol= null;
    }*/

    /*regButton = () => {
        fetch('http://10.10.6.231:3000/patient',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ pHeight:this.height, pWeight:this.weight, pBlood:this.bld, pBMI:this.bmi, 
                pBP:this.bp, pGlucose:this.sugar, pChol:this.cholesterol})
        }).then((responseData)=> {
            return responseData.json();
        }).then((jsonData)=> {
           // console.log(jsonData);
            this.setState({anaData: jsonData})
            console.log(this.state.naData)
        }).done();
        this.id = null;
        this.height = null;
        this.weight = null;
        this.bld=null;
        this.bmi = null;
        this.bp = null;
        this.sugar = null;
        this.cholesterol= null;
    }*/

  

    render () {
        /*const data = this.state.apiData;*/
        
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>One step more! </Text>
                
                <TextInput 
                    style={input} 
                    placeholder='User Name'
                    onChangeText={(text) => {this.height =text}}
                    value= {this.height}
                />
                <TextInput 
                    style={input} 
                    placeholder='Password'
                    onChangeText={(text) => {this.weight =text}}
                    value= {this.weight} 
                />
               
                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.regButton}>
                        <Text> Save </Text>
                    </TouchableOpacity>
               </View>
                
            </View>
        )
    };
}
