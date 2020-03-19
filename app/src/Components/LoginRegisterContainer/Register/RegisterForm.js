import React from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../../State/ActionCreator';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const RegisterForm = props => {
    const [Email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmedPassword, setConfirmedPassword] = React.useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(register(Email, password))
        event.preventDefault();
    }
    return <Box padding component={Card} style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
        <form onSubmit={handleSubmit}>
                <TextField type="email" onChange={(event) => setEmail(event.target.value)} id="name" placeholder="Email" name="email" required
                />
                <TextField type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
                />
                <TextField type="password" onChange={(event) => setConfirmedPassword(event.target.value)} id="confirmPassword" placeholder="Confirm password" name="confirm" required
                />
            <Button disabled={confirmedPassword !== password} type="submit" >
                Submit
            </Button>
        </form>
    </Box >
}