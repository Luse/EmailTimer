import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchList } from '../../State/States/Gifs';

export const Timers = props => {
    const { user } = useSelector(state => ({
        user: state.userReducer,
    }));

    const dispatch = useDispatch();
    React.useEffect(() => {
      if(
        !user.authenticated
      ){
        dispatch(fetchList())
      }
    }, [dispatch, user])
    

    if (!user.authenticated) return null
    return <div>
        timer
    </div >
}