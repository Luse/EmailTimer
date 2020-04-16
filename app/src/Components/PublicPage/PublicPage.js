import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { HourglassIllustration } from './HourglassIllustration';

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
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>
                        {/* <Button>
                            <Typography color="textPrimary">
                                Pricing
                        </Typography>
                        </Button>
                        <Button>
                            <Typography color="textPrimary">
                                Features
                            </Typography>

                        </Button>
                        <Button>
                            <Typography color="textPrimary">
                                Blog
                        </Typography>
                        </Button>
                        <Button>
                            <Typography color="textPrimary">
                                Help/faq
                            </Typography>
                        </Button> */}

                    </Grid>
                    {/* <Grid item xs={1}>
                        <Box textAlign="right">
                  
                        </Box>

                    </Grid> */}
                    <Grid item xs={3}>
                        <Box textAlign="center">
                        <Button component={Link} to="/login" variant="text" color="secondary">
                                Login
                            </Button>
                            <Button component={Link} to="/register" variant="contained" color="primary">
                                Register
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <HourglassIllustration />
    </Grid>
}