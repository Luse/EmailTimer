import React from 'react';
import { RegisterForm } from './RegisterForm'
import { useSelector } from "react-redux";
export const Register = props => {
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));

    return <div>
        {user}
        <RegisterForm />
    </div >
}