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
    constructor(props){
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
    }

    regButton = () => {
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
    }

    profile() {
        Actions.profile()
    }

    

    render () {
        const data = this.state.apiData;
        
        const { input, parent,loginTxt,buttonStyle,signupTxt } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Enter Basic Health Information </Text>
                
                <TextInput 
                    style={input} 
                    placeholder='Enter Height'
                    onChangeText={(text) => {this.height =text}}
                    value= {this.height}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter Weight'
                    onChangeText={(text) => {this.weight =text}}
                    value= {this.weight} 
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood type'
                    onChangeText={(text) => {this.dob =text}}
                    value= {this.dob}
                 />
                <TextInput 
                    style={input} 
                    placeholder='BMI' 
                    onChangeText={(text) => {this.bmi =text}}
                    value= {this.bmi}
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood pressure level' 
                    onChangeText={(text) => {this.bp =text}}
                    value= {this.bp}
                />
                <TextInput 
                    style={input} 
                    placeholder='Blood Glucose level' 
                    onChangeText={(text) => {this.sugar =text}}
                    value= {this.sugar}
                />

                <TextInput 
                    style={input} 
                    placeholder='Cholesterol level' 
                    onChangeText={(text) => {this.cholesterol =text}}
                    value= {this.cholesterol}
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
