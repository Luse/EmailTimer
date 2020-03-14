import React from 'react';
import { useDispatch } from "react-redux";
import { login } from '../../../State/ActionCreator';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const LoginForm = props => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(login(username, password))
        event.preventDefault();
    }
    return <Box component={Card} padding style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
        <form onSubmit={handleSubmit}>
                <TextField type="text" onChange={(event) => setUsername(event.target.value)} id="name" placeholder="Username" name="name" required
                />
                <TextField type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
                />
            <Button type="submit" >
                Submit
            </Button>
        </form>
    </Box >
}