import React from 'react';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from "react-redux";
import {
    useHistory,
} from "react-router-dom";
import { isLoggedIn } from '../../State/ActionCreator';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export const LoginRegisterContainer = props => {
    const [toggleLoginOrRegister, setToggleLoginOrRegister] = React.useState(true);
    let history = useHistory();
    const dispatch = useDispatch();

    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));
    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            history.replace('/dashboard');
            dispatch(isLoggedIn())
        }
    }, [dispatch, history, user.authenticating])
    if (user.authenticating) {
        return null
    }
    const Component = toggleLoginOrRegister ? Login : Register
    return <Box gridColumn="2" gridRow="2">
        <Box paddingBottom="1" >
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button onClick={() => setToggleLoginOrRegister(!toggleLoginOrRegister)} color="primary" variant={toggleLoginOrRegister ? "contained" : 'outlined'}>Login</Button>
                <Button onClick={() => setToggleLoginOrRegister(!toggleLoginOrRegister)} color="secondary" variant={!toggleLoginOrRegister ? "contained" : 'outlined'} >Register</Button>
            </ButtonGroup>
        </Box>
        <Component />

    </Box>
};