import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
export const Container = (props) => (
  <Grid justify="center" container>
    {props.children}
  </Grid>
);
Container.propTypes = {
  children: PropTypes.node,
};
