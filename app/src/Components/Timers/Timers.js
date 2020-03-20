import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchList } from '../../State/ActionCreator';
import {NewTimer} from './NewTimer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DeleteTimerButton } from './DeleteTimerButton';

export const Timers = props => {
    const { user, gifs } = useSelector(state => ({
        user: state.userReducer,
        gifs: state.gifsReducer
    }));

    const dispatch = useDispatch();
    React.useEffect( () => {
         dispatch(fetchList())
    }, [dispatch, user.authenticated])
    

    if (!user.authenticated) return null
    return <Box gridColumn="3" gridRow="1" width="500px">
      <NewTimer />
        <List >
        {gifs.list.map( gif => 
          <ListItem>
            <ListItemText secondary={new Date(gif.targetDate).toLocaleDateString()} primary={`https://www.mailtimer.com/${gif.webAccessor}`} />
            <ListItemSecondaryAction>
              <DeleteTimerButton id={gif.id} />
            </ListItemSecondaryAction>
          </ListItem>
          )}
        </List>
    </Box >
}