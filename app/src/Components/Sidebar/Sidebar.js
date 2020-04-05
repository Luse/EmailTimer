import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export const Sidebar = props => (
    <Grid direction="column" xs sm md item container >
        <Paper>
            {props.children}
        </Paper>
    </Grid>
)