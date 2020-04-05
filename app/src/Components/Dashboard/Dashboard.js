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
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarNavigation } from '../SiderbarNavigation/SidebarNavigation';

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
    <Grid direction="row" alignItems="stretch" justify="space-around" container spacing={2}>
      <Header>
        <Logout />
      </Header>
      <Sidebar>
        <SidebarNavigation />
      </Sidebar>
      <Content >
        {props.children}
      </Content>
    </Grid>
  );
}