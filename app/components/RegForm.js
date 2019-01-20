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

export default class RegForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiData: [],
            naData: []
        }
        this.id = null;
        this.name = null;
        this.nic = null;
        this.dob = null;
        this.addr = null;
        this.email = null;
        this.mobile= null;
    }

    regButton = () => {
        fetch('http://10.10.6.231:3000/patient',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ pName:this.name, pNIC:this.nic, pDOB:this.dob, pAddress:this.addr, pEmail:this.email, pMobile:this.mobile})
        }).then((responseData)=> {
            return responseData.json();
        }).then((jsonData)=> {
           // console.log(jsonData);
            this.setState({anaData: jsonData})
            console.log(this.state.naData)
        }).done();
        this.id = null;
        this.name = null;
        this.nic = null;
        this.dob = null;
        this.addr = null;
        this.email = null;
        this.mobile= null;
    }
    
    profile() {
        Actions.profile()
    }

    bhealth() {
        Actions.bhealth()
    }

    

    render () {
        const data = this.state.apiData;
        
        const { input, parent,loginTxt,buttonStyle,signupTxt,nextButton } = style
        return (
            <View style={parent}>
                <Text style={loginTxt}>Enter Basic Information </Text>
                <TextInput 
                    style={input} 
                    placeholder='Enter Name'
                    onChangeText={(text) => {this.name =text}}
                    value= {this.name}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter NIC'
                    onChangeText={(text) => {this.nic =text}}
                    value= {this.nic} 
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter Date of Birth'
                    onChangeText={(text) => {this.dob =text}}
                    value= {this.dob}
                 />
                <TextInput 
                    style={input} 
                    placeholder='Enter Address' 
                    onChangeText={(text) => {this.addr =text}}
                    value= {this.addr}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter email' 
                    onChangeText={(text) => {this.email =text}}
                    value= {this.email}
                />
                <TextInput 
                    style={input} 
                    placeholder='Enter mobile number' 
                    onChangeText={(text) => {this.mobile =text}}
                    value= {this.mobile}
                />

               {/*<TouchableOpacity
                    style={buttonStyle} onPress= {this.profile}>
                    <Text> View Profile </Text>
               </TouchableOpacity>*/}

                <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.regButton}>
                        <Text> Register </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={nextButton} onPress = {this.bhealth}>
                        <Text> Next </Text>
                    </TouchableOpacity>

                {/* <ScrollView>
                        {dataDisplay}
                </ScrollView>*/}
               </View>
                
            </View>
        )
    };
}
