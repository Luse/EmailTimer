import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";

export const Sidebar = (props) => (
  <Grid direction="column" xs sm md item container>
    <Paper>{props.children}</Paper>
  </Grid>
);
Sidebar.propTypes = {
  children: PropTypes.node,
};
