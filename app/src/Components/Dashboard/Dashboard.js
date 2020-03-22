import React from 'react';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { Logout } from '../LoginRegisterContainer/Login/Logout';

export const Dashboard = (props) => {

  return (
    <React.Fragment>
      <Header>
        <Logout />
      </Header>
      <Content>
        {props.children}
      </Content>
    </React.Fragment>
  );
}