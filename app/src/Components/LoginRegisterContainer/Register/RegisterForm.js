import React from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../../State/ActionCreator';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

export const RegisterForm = props => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(register(username, password))
        event.preventDefault();
    }
    return <Box padding component={Card} style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
        <form onSubmit={handleSubmit}>
                <TextField type="text" onChange={(event) => setUsername(event.target.value)} id="name" placeholder="Username" name="name" required
                />
                <TextField type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
                />
                <TextField type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Confirm password" name="password" required
                />
            <div>
                <TextField type="submit" value="Submit" />
            </div>
        </form>
    </Box >
}