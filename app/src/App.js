import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from './State/States/User';
import { Container } from './Components/Container/Container';
import Box from '@material-ui/core/Box';
import { Router } from './Route/Routes';
import { LinearProgress } from "@material-ui/core";

function App() {
  const { user } = useSelector(state => ({
    user: state.userReducer,
}));
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(isLoggedIn())
  }, [dispatch])
  
  return (
    <Box height="100%" className="App">
      {user.authenticating && <LinearProgress />}
      <Container>
        <Router />
      </Container>
    </Box>
  );
}

export default App;
