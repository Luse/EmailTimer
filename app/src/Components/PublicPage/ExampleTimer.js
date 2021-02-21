import React from "react";
import Grid from "@material-ui/core/Grid";

import { Typography, Button, Box, Paper, Divider } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export const ExampleTimer = (props) => {
  return (
    <Grid item container xs={12} justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Paper>
          <Box padding={1}>
            <Box paddingBottom={1}>
              <Typography color="primary">
                <MailOutlineIcon color="primary" />
                <Divider />
                From: Important@business.com
              </Typography>
            </Box>
            <Divider />
            <Box paddingTop={1}>
              <Typography align="center" variant="h4" color="primary">
                Call to action
              </Typography>
            </Box>
            <Box padding={2} textAlign="center">
              <img
                alt="coundown timer provided by mailtimer.com"
                src="https://cdn.mailtimer.com/cRVAri"
              />
            </Box>
            <Box paddingBottom={1} textAlign="center">
              <Button variant="contained" color="primary">
                Act now!
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="primary" align="center">
          Activate your customers
        </Typography>
        <Typography variant="body1" color="primary" align="center">
          Increase engagement with a clear call to action
        </Typography>
      </Grid>
    </Grid>
  );
};
