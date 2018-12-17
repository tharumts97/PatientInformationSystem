import React, { Component } from 'react';

import { Router,Stack,Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/profile';
import BasicHealth from './pages/basicHealth';

export default class Routs extends Component {
    render (){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="signup" component={Register} title="Register"/>
                <Scene key="profile" component={Profile} title="Profile"/>
                <Scene key="bhealth" component={BasicHealth} title="BasicHealth"/>
                </Stack>
            </Router>
        )
    }
}