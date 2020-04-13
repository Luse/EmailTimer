import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%'
    }
  }));

export const HourglassIllustration = (props) => {
    const classes = useStyles();

    return <Grid item container xs={12} justify="center" alignItems="center">
        <Grid xs={6}>
            <Typography variant="h4" color="primary" align="center">
                Activate your customers
            </Typography>
            <Typography variant="body1" color="primary" align="center">
            Increase engagement with a clear call to action
            </Typography>
            <Box paddingTop={2} textAlign="center">
                <Button color="primary" variant="contained">
                    Sign up now - its free
                </Button>
            </Box>
         
            
        </Grid>
        <Grid xs={6}>
            <img className={classes.img} src={`${process.env.PUBLIC_URL}HappyPerson.png`} />
        </Grid>
    </Grid>
}