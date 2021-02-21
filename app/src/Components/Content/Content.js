import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Box } from "@material-ui/core";

export const Content = (props) => (
  <Grid component={Box} xs={12} sm={12} md={10} item>
    <Paper component={Box} padding={2}>
      {props.children}
    </Paper>
  </Grid>
);
Content.propTypes = {
  children: PropTypes.node,
};
