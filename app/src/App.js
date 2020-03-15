import React from 'react';
import { Timers } from './Components/Timers/Timers';
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from './State/States/User';
import { Container } from './Components/Container/Container';
import { LoginRegisterContainer } from './Components/LoginRegisterContainer/LoginRegisterContainer';
import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';
import Box from '@material-ui/core/Box';

function App() {
  const { user } = useSelector(state => ({
    user: state.userReducer,
}));
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(
      !user.authenticated
    ){
      dispatch(isLoggedIn())
    }
  }, [dispatch, user])
  
  return (
    <Box height="100%" className="App">
      <Container>
        <Header>
         <LoginRegisterContainer />
        </Header>
        <Content>
          <Timers />
        </Content>
      </Container>
    </Box>
  );
}

export default App;
