import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
}));

export const HourglassIllustration = (props) => {
  const classes = useStyles();

  return (
    <Grid item container xs={12} justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="primary" align="center">
          Simplify your processes
        </Typography>
        <Typography variant="body1" color="primary" align="center">
          Save time and money
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box paddingTop={10}>
          <img
            alt="Less stress"
            className={classes.img}
            src={`${process.env.PUBLIC_URL}HappyPerson.png`}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
