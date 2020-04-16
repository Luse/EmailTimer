import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, isLoggedIn } from '../../State/ActionCreator';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    useHistory,
} from "react-router-dom";

export const LoginForm = props => {
    const [Email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    let history = useHistory();

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));

    const handleSubmit = (event) => {
        dispatch(login(Email, password))
        event.preventDefault();
    }

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            history.replace('/dashboard');
            dispatch(isLoggedIn())
        }
    }, [dispatch, history, user.authenticated])

    return <Box component={Card} padding={1} style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
        <form onSubmit={handleSubmit}>
            <TextField type="email" onChange={(event) => setEmail(event.target.value)} id="name" placeholder="Email" name="Email" required
            />
            <TextField type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
            />
            <Typography color="error">
                {user.error}
            </Typography>
            <Button type="submit" >
                Login
            </Button>
        </form>
    </Box >
}