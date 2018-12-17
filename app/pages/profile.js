import React, { Component } from 'react';
import { 
    View ,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import style from '../components/style';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiData: []
        }
        this.id = null;
        this.name = null;
        this.nic = null;
        this.dob = null;
        this.addr = null;
        this.email = null;
        this.mobile= null;
    }

    getButton = () => {
        fetch('http://192.168.1.100:3000/patient',{
            method: 'GET'
        }).then((responseData)=> {
            return responseData.json();
        }).then((jsonData)=> {
            console.log(jsonData);
            this.setState({apiData: jsonData})
            console.log(this.state.apiData)
        }).done();
        this.pID = null;
    }

    searchButton = () => {
        fetch('http://192.168.1.100:3000/patient',{
            method: 'GET'
        }).then((responseData)=> {
            return responseData.json();
        }).then((jsonData)=> {
            console.log(jsonData);
            this.setState({apiData: jsonData})
            console.log(this.state.apiData)
        }).done();
        this.pID = null;
    }

   
    render () {
        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.pID}>
                    <View>
                        <Text>ID : {jsonData.pID}</Text>
                        <Text>Name: {jsonData.pName}</Text>
                        <Text>{jsonData.pNIC}</Text>
                        <Text>{jsonData.pDOB}</Text>
                        <Text>{jsonData.pAddress}</Text>
                        <Text>{jsonData.pEmail}</Text>
                        <Text>{jsonData.pMobile}</Text>
                    </View>

                </View>
            )
        });
        const { input, parent,loginTxt,buttonStyle,signupTxt } = style
        return (
           <View>
               {/*<Text>View Users</Text>*/}
               <View>
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.getButton}>
                        <Text> View Profile </Text>
                    </TouchableOpacity>

                    <TextInput style={input} underlineColorAndroid='#BDBDBD' placeholder="Patient ID"/>                   
                    <TouchableOpacity
                        style={buttonStyle} onPress = {this.searchButton}>
                        <Text> Search </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle} onPress={this.cmt}>
                        <Text>Comment</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        {dataDisplay}
                    </ScrollView>
                </View>
            </View>
        )
    };
}

//AppRegistry.registerComponent('navigation, ()=>CodeTR');