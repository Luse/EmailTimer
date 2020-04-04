import React from 'react';
import Grid from '@material-ui/core/Grid';
export const Container = props => (
    <Grid justify="center" Container spacing={2}>
        {props.children}
    </Grid>
)