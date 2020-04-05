import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';

export const Content = props => (
  <Grid component={Box} xs={12} sm={12} md={10} item>
    <Paper component={Box} padding={2}>
      {props.children}
    </Paper>
  </Grid>
)