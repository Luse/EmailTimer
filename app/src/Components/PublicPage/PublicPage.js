import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const PublicPage = ()=> (
    <React.Fragment>
    <Box gridColumn="4 / 8" gridRow="4">
        <Box textAlign="center">
        <Typography variant="h1">
            Mailtimer
        </Typography>
        <Typography  variant="h2">
            The easier alternative
        </Typography>
     
        </Box>
    </Box>
    <Box gridColumn="4 / 8" gridRow="5" paddingTop={2}>
    <Button component={Link} to="/login" size="large" color="primary" variant="contained" fullWidth>
        Now in early Alpha
        </Button>
    </Box>
    <Box gridColumn="10" gridRow="10">
    <Typography variant="subtitle">
        Made by <a href="https://github.com/GrayOverride">Me</a>
        </Typography>
    </Box>
    </React.Fragment>
)