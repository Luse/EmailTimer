import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from '../../../State/ActionCreator';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export const Logout = props => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));
    
    if(!user.authenticated){
        return null
    }

    return <Box gridColumn="6">
            <Button variant="outlined"  onClick={() => dispatch(logout())}>Logout</Button>
        </Box>
}