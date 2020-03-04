import React from 'react';
import { LoginForm } from './LoginForm'
import { useSelector } from "react-redux";
export const Login = props => {
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));

    return <div>
        {user}
        <LoginForm />
    </div >
}