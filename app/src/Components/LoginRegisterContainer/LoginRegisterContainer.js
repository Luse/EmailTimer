import React from 'react';
import { useSelector } from "react-redux";
import {Login} from './Login/Login';
import {Register} from './Register/Register';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export const LoginRegisterContainer = props => {
    const [toggleLoginOrRegister, setToggleLoginOrRegister] = React.useState(true);
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));
    const Component = toggleLoginOrRegister ? Login : Register
    if(user.authenticated){
        return null
    }
    return <Box gridColumn="2" gridRow="2" padding>
            <Box paddingBottom>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button onClick={()=> setToggleLoginOrRegister(!toggleLoginOrRegister)} color="primary" variant={toggleLoginOrRegister ? "contained" : 'outline'}>Login</Button>
                    <Button onClick={()=> setToggleLoginOrRegister(!toggleLoginOrRegister)} color="secondary" variant={!toggleLoginOrRegister ? "contained" : 'outline'} >Register</Button>
                </ButtonGroup>
            </Box>
        <Component />

    </Box>
};