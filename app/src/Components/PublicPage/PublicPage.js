import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Content } from '../Content/Content';
import { Link } from 'react-router-dom';

export const PublicPage = ()=> (
    <Content >
    <Box gridColumn="2" gridRow="2">
        <Box textAlign="center">
        <Typography variant="h1">
            Mailtimer
        </Typography>
        <Typography  variant="h2">
            the friendlier alternative
        </Typography>
        <Button component={Link} to="/login" size="large" color="primary" variant="contained" display="flex">
        Try it out
        </Button>
        </Box>
    </Box>

    </Content>

)