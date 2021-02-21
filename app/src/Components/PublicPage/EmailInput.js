import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Box,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { registerForMailList } from "../../State/ActionCreator";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "50%",
    height: "50%",
  },
}));

export const EmailInput = (props) => {
  const [Email, setEmail] = React.useState("");
  const validationPattern = /\S+@\S+\.\S+/;
  const { mailList } = useSelector((state) => ({
    mailList: state.mailListReducer,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (event) => {
    dispatch(registerForMailList(Email));
    event.preventDefault();
  };
  return (
    <Grid item container xs={12} justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <Box padding={12}>
          {mailList.submited === false && (
            <Box>
              <Typography align="center" variant="h4" color="primary">
                Mailtimer is currently in limited Beta
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Want to get in early or maybe just keep an eye on the product?
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Sign up to our newsletter!
              </Typography>

              <TextField
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                color="secondary"
                fullWidth
                label="Email adress"
              />
              <Typography variant="body1" color="primary">
                We promise to only send you relevant information
              </Typography>
              <Box paddingTop={2}>
                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    disabled={!validationPattern.test(Email)}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Subscribe
                  </Button>
                </form>
              </Box>
            </Box>
          )}
          {mailList.submited === true && (
            <Box>
              <Typography align="center" variant="h4" color="primary">
                Well done!
              </Typography>
              <Box textAlign="center">
                <img
                  alt="welcome to the future"
                  className={classes.img}
                  src={`${process.env.PUBLIC_URL}VRPerson.png`}
                />
                <Typography variant="h4" color="primary" align="center">
                  We will get in touch as soon as we have some exciting news!
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
