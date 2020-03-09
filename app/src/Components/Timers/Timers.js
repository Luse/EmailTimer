import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchList } from '../../State/ActionCreator';
import {NewTimer} from './NewTimer'
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
    return <div>
      <NewTimer />
        timers:
        {gifs.list.map( gif => <div>
          target: {gif.targetDate} <br/>
          accessor: {gif.webAccessor}
          </div>)}
    </div >
}