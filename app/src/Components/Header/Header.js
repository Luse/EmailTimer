import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export const Header = props => (
<Grid direction="row" justify="flex-end" noWrap alignItems="center" container item spacing={2}>
  {props.children}
</Grid>
)