import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, isLoggedIn } from "../../State/ActionCreator";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const RegisterForm = (props) => {
  const [Email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState(null);
  const dispatch = useDispatch();
  let history = useHistory();
  const { user } = useSelector((state) => ({
    user: state.userReducer,
  }));

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/dashboard");
      dispatch(isLoggedIn());
    }
  }, [dispatch, history, user.authenticated]);

  const handleSubmit = (event) => {
    dispatch(register(Email, password));
    event.preventDefault();
  };
  return (
    <Grid item xs>
      <Box padding={4} component={Card}>
        <Grid container>
          <Grid item md={5} xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                fullWidth
                onChange={(event) => setEmail(event.target.value)}
                id="name"
                placeholder="Email"
                name="email"
                required
              />
              <TextField
                type="password"
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                placeholder="Password"
                name="password"
                required
              />
              <TextField
                type="password"
                fullWidth
                onChange={(event) => setConfirmedPassword(event.target.value)}
                id="confirmPassword"
                placeholder="Confirm password"
                name="confirm"
                required
              />
              <Typography color="error">{user.error}</Typography>
              <Button disabled={confirmedPassword !== password} type="submit">
                Register
              </Button>
            </form>
          </Grid>
          <Grid item md={2} xs={12}></Grid>
          <Grid item md={4} xs={12}>
            <Box padding={2}>
              <Typography align="center">
                Should you choose to remove your account all off your data will
                be terminated
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
