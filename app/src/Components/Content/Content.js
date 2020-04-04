import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export const Content = props => (
<Grid container item spacing={4}>
  {props.children}
</Grid>
)