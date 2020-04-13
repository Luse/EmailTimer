import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%'
    }
}));


export const DashboardLanding = () => {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center" >
            <Grid item xs >
                <Typography variant="h4" color="primary" align="center">
                    Hello and welcome!
               </Typography>
               <Typography align="center">
                   This product is still in beta
               </Typography>
            </Grid>
            <Grid item xs>
                <img className={classes.img} src={`${process.env.PUBLIC_URL}VRPerson.png`} />
            </Grid>

        </Grid>
    )
}