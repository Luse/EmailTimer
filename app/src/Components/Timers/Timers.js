import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchList } from '../../State/ActionCreator';
import {NewTimer} from './NewTimer';
import Box from '@material-ui/core/Box';

export const Timers = props => {
    const { user, gifs } = useSelector(state => ({
        user: state.userReducer,
        gifs: state.gifsReducer
    }));

    const dispatch = useDispatch();
    React.useEffect( () => {
         dispatch(fetchList())
    }, [dispatch])
    

    if (!user.authenticated) return null
    return <Box gridColumn="2" gridRow="1">
      <NewTimer />
        timers: <br/>
        {gifs.list.map( gif => <code>
          https://www.mailtimer.com/{gif.webAccessor}
          <br/>
          </code>)}
    </Box >
}