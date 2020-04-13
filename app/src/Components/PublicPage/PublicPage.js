import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Box, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {HourglassIllustration} from './HourglassIllustration';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: theme.spacing(2)
    },
}));

export const PublicPage = () => {
    const classes = useStyles();


    return <Grid direction="row" justify="center" alignItems="center" spacing={4} container >
        <Grid item xs >
            <Box className={classes.header}>
                <Grid container justify="flex-end" alignItems="center">
                    <Grid item xs={2}>
                        <Typography color="secondary" variant="h4" align="center">
                            Mailtimer
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                
                    </Grid>
                    <Grid item xs={5}>
                        <Button>
                            Pricing
                        </Button>
                        <Button>
                            Features
                        </Button>
                        <Button>
                            Blog
                        </Button>
                        <Button>
                            Help/faq
                        </Button>
                        
                    </Grid>
                    <Grid item xs={1}>
                        <Box textAlign="right">
                            <Button variant="outlined" color="primary">
                                Login
                            </Button>
                        </Box>
                
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <HourglassIllustration />
    </Grid>
}