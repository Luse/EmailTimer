import React from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../State/ActionCreator';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




export const RegisterForm = props => {
    const [Email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmedPassword, setConfirmedPassword] = React.useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(register(Email, password))
        event.preventDefault();
    }
    return <Grid item xs>
        <Box padding={2} component={Card}>
            <Grid container >
                <Grid item xs>
                    <form onSubmit={handleSubmit}>
                        <TextField type="email" fullWidth onChange={(event) => setEmail(event.target.value)} id="name" placeholder="Email" name="email" required
                        />
                        <TextField type="password" fullWidth onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
                        />
                        <TextField type="password" fullWidth onChange={(event) => setConfirmedPassword(event.target.value)} id="confirmPassword" placeholder="Confirm password" name="confirm" required
                        />
                        <Button disabled={confirmedPassword !== password} type="submit" >
                            Submit
                    </Button>
                    </form>
                </Grid>
                <Grid item xs={4} >
                    <Box padding={2}>
                    <Typography>
                        Should you choose to remove you account all off your data will be terminated
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    </Grid>
}