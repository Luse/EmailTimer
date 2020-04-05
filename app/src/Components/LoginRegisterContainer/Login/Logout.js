import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from '../../../State/ActionCreator';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

import {
    useHistory,
} from "react-router-dom";
export const Logout = props => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));

    const handleSignOut = () => {
        dispatch(logout())
        history.replace('/login');
    }
    
    return <Grid item>
            <Button variant="contained"  fullWidth onClick={handleSignOut}>{`Logout ${user.username}`}</Button>
        </Grid>
}