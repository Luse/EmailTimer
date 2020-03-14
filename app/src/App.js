import React from 'react';
import { Timers } from './Components/Timers/Timers';
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from './State/States/User';
import { Container } from './Components/Container/Container';
import { LoginRegisterContainer } from './Components/LoginRegisterContainer/LoginRegisterContainer';
import { Header } from './Components/Header/Header';

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
    <div className="App">
      <Container>
        <Header>
         <LoginRegisterContainer />

        </Header>
      <Timers />
      </Container>
    </div>
  );
}

export default App;
