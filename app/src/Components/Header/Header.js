import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },

}));

export const Header = props => {
  const classes = useStyles();

  return <Grid direction="row" justify="flex-end" className={classes.root} alignItems="center" container item>
    {props.children}
  </Grid>
}