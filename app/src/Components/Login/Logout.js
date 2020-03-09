import React from 'react';
import { useDispatch } from "react-redux";
import { logout } from '../../State/ActionCreator';

export const Logout = props => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(logout())}>Logout</button>
}