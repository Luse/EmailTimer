import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HourglassIllustration } from "./HourglassIllustration";
import { EmailInput } from "./EmailInput";
import { ExampleTimer } from "./ExampleTimer";
import { Security } from "./Security";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(2),
  },
}));

export const PublicPage = () => {
  const classes = useStyles();
  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="center"
      spacing={20}
      container
    >
      <Grid item xs>
        <Box className={classes.header}>
          <Grid container justify="flex-end" alignItems="center">
            <Grid item xs={2}>
              <Typography color="secondary" variant="h4" align="center">
                Mailtimer
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <HourglassIllustration />
      <ExampleTimer />
      <Box paddingBottom={70}></Box>

      <Security />
      <Box paddingBottom={70}></Box>
      <Box paddingBottom={50} paddingTop={20}>
        <EmailInput />
      </Box>
    </Grid>
  );
};
