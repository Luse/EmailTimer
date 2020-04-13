import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
            <Typography variant="h5" color="primary" align="center">
                Activate your customers
            </Typography>
            <Typography variant="body1" color="primary" align="center">
                Increse engagement with a clear call to action
            </Typography>
            
        </Grid>
        <Grid xs={6}>
            <img className={classes.img} src={`${process.env.PUBLIC_URL}HappyPerson.png`} />
        </Grid>
    </Grid>
}