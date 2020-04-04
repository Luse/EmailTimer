import React from 'react';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Logout } from '../LoginRegisterContainer/Login/Logout';
import { useDispatch } from "react-redux";
import { isLoggedIn } from '../../State/States/User';
import {
  useHistory,
} from "react-router-dom";
import { Grid } from '@material-ui/core';
export const Dashboard = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      history.replace('/dashboard');
      dispatch(isLoggedIn())
    }
  }, [dispatch, history])
  return (
    <Grid container spacing={3}>
      <Header>
        <Logout />
      </Header>
      <Content >
        {props.children}
      </Content>
    </Grid>
  );
}