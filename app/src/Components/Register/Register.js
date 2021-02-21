import React from "react";
import { RegisterForm } from "./RegisterForm";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    maxHeight: "400px",
  },
}));
export const Register = (props) => {
  const classes = useStyles();
  return (
    <Box paddingTop={4}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" align="center" gutterBottom>
            Register new account
          </Typography>
        </Grid>
        <RegisterForm />
        <Grid item>
          <Box>
            <Button component={Link} to="/login" variant="text">
              Already have an account?
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="secure login"
            className={classes.img}
            src={`${process.env.PUBLIC_URL}SecureWoman.png`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
