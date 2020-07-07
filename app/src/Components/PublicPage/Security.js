import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%'
    }
  }));

export const Security = (props) => {
    const classes = useStyles();

    return <Grid item container xs={12} justify="center" alignItems="center">
 
        <Grid item xs={12} md={6}>
            <Typography align="center" color="primary" variant="h4">
                Build with security in mind
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
            <img alt="secure login" className={classes.img} src={`${process.env.PUBLIC_URL}SecureWoman.png`} />
        </Grid>
    </Grid>
}