import React from 'react';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from './State/States/User';

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
      <Login />
      <Register />
    </div>
  );
}

export default App;