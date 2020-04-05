import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const PublicPage = () => (
    <Grid direction="column" justify="space-between" alignItems="center" spacing={4} container >
        <Grid component={Box} marginTop={10} item>
            <Box textAlign="center">
                <Typography variant="h1">
                    Mailtimer
        </Typography>
                <Typography variant="h2">
                    The easier alternative
        </Typography>

            </Box>
        </Grid>
        <Grid item paddingTop={2}>
            <Button component={Link} to="/login" size="large" color="primary" variant="contained" fullWidth>
                Now in early Alpha
            </Button>
        </Grid>
        <Grid item >
            <Typography variant="subtitle">
                Made by <a href="https://github.com/GrayOverride">Me</a>
            </Typography>
        </Grid>
    </Grid>
)