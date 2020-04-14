import React from 'react';
import { LoginForm } from './LoginForm'
import { Button, Grid, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
        maxWidth: '100%',
        maxHeight: '400px'
    }
}));
export const Login = props => {
    const classes = useStyles();

    return <Box paddingTop={4}>
        <Grid container direction="column" alignItems="center">
            <Typography gutterBottom variant="h6" color="primary">
                Secure login
            </Typography>
        <LoginForm />
        <Grid item xs={12}>
        <Button component={Link} to="/register" variant="text" color="secondary">
            Register
        </Button>
        <Button>
            Cant sign in?
        </Button>
        </Grid>
  
        <Grid item xs={12}>
                <img alt="secure login" className={classes.img} src={`${process.env.PUBLIC_URL}SecureWoman.png`} />
            </Grid>
        </Grid>
        </Box>
    
}