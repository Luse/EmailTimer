import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from '../../State/ActionCreator';
import { NewTimer } from './NewTimer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DeleteTimerButton } from './DeleteTimerButton';
import {
  useParams
} from "react-router-dom";
import { Header } from '../Header/Header';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

export const Timers = props => {
  const { gifs, campaign } = useSelector(state => ({
    user: state.userReducer,
    gifs: state.gifsReducer,
    campaign: state.campaignsReducer
  }));
  const [activeCampaign, setActiveCampaign] = React.useState(null);

  const dispatch = useDispatch();
  let { id } = useParams();
  React.useEffect(() => {
    dispatch(fetchList(id))
    setActiveCampaign(campaign.list.find(a => a.id === parseInt(id)));
  }, [dispatch, id, campaign])
  
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Header>
      <IconButton aria-label="delete">
        <SettingsIcon />
      </IconButton>
      </Header>
      <Grid item xs={12}>
      <NewTimer />
      </Grid>
      <Grid item xs={6}>
        <List >
          {gifs.list.map((gif, index) =>
            <ListItem key={index}>
              <ListItemText secondary={new Date(gif.targetDate).toLocaleDateString()} primary={`https://www.mailtimer.com/${gif.webAccessor}`} />
              <ListItemSecondaryAction>
                <DeleteTimerButton id={gif.id} />
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </Grid>
      <Grid item xs={3}>
            
      </Grid>
    </Grid >)
}