import React from 'react';
import { LoginForm } from './LoginForm'
import { useSelector } from "react-redux";
import { Logout } from './Logout';
export const Login = props => {
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));
    if(user.authenticated){
        return <Logout />
    }
    return <div>
        <LoginForm />
    </div >
}