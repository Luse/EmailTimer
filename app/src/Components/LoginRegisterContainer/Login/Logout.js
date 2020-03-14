import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from '../../../State/ActionCreator';
import Button from '@material-ui/core/Button';

export const Logout = props => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));
    
    if(!user.authenticated){
        return null
    }

    return <Button variant="outlined"  onClick={() => dispatch(logout())}>Logout</Button>
}