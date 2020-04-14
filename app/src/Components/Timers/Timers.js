import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchList, postNewConfiguration } from '../../State/ActionCreator';
import { NewTimer } from './NewTimer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DeleteTimerButton } from './DeleteTimerButton';
import {
  useParams
} from "react-router-dom";
import { Typography, TextField, Switch, FormControlLabel, Button, CircularProgress } from '@material-ui/core';
import { Preview } from './Preview';

export const Timers = props => {
  const { gifs, campaign, configurations } = useSelector(state => ({
    user: state.userReducer,
    gifs: state.gifsReducer,
    campaign: state.campaignsReducer,
    configurations: state.configurationsReducer
  }));
  const [activeCampaign, setActiveCampaign] = React.useState(null);
  const [configuration, setConfiguration] = React.useState(null);
  const dispatch = useDispatch();
  let { id } = useParams();
  React.useEffect(() => {
    dispatch(fetchList(id))
    const c = campaign.list.find(a => a.id === parseInt(id));
    if (c) {
      setActiveCampaign(c);
      setConfiguration(c.configuration)
    }
  }, [dispatch, id, campaign.list])

  const handleUpdateConfig = (event) => {
    dispatch(postNewConfiguration(configuration.id, configuration))
    dispatch(fetchList(id))
    event.preventDefault();
  }
  if(!activeCampaign){
    return <CircularProgress />
  }
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={12}>
        <Preview hash={configurations.lastUpdated} />
      </Grid>
      <Grid item xs={6}>
        <Box padding={2}>
          <Typography>
            Configuration
        </Typography>
          {!configuration ?
            <CircularProgress />
            :
            <form noValidate autoComplete="off" onSubmit={handleUpdateConfig}>
              <Box padding={1}>
                <TextField
                  id="timeoutText"
                  label="Timeout"
                  variant="outlined"
                  color="secondary"
                  value={configuration.timeoutText}
                  onChange={(event) => setConfiguration({ ...configuration, timeoutText: event.target.value })}
                />
              </Box>
              <Box padding={1}>
                <TextField
                  id="timerWidth"
                  label="Width"
                  variant="outlined"
                  color="secondary"
                  value={configuration.timerWidth}
                  onChange={(event) => setConfiguration({ ...configuration, timerWidth: event.target.value })}
                />
              </Box>
              <Box padding={1}>
                <TextField
                  id="timerHeight"
                  label="Height"
                  variant="outlined"
                  color="secondary"
                  value={configuration.timerHeight}
                  onChange={(event) => setConfiguration({ ...configuration, timerHeight: event.target.value })}
                />
              </Box>
              <Box padding={1}>
                <TextField
                  id="fontColor"
                  label="Font Color"
                  variant="outlined"
                  color="secondary"
                  value={configuration.fontColor}
                  onChange={(event) => setConfiguration({ ...configuration, fontColor: event.target.value })}
                />
              </Box>
              <Box padding={1}>
                <TextField
                  id="fontSize"
                  label="Font Size"
                  variant="outlined"
                  color="secondary"
                  value={configuration.fontSize}
                  onChange={(event) => setConfiguration({ ...configuration, fontSize: event.target.value })}
                />
              </Box>
              {!configuration.transparent &&
                <Box padding={1}>
                  <TextField
                    id="backgroundColor"
                    label="Background color"
                    variant="outlined"
                    color="secondary"
                    onChange={(event) => setConfiguration({ ...configuration, backgroundColor: event.target.value })}
                    value={configuration.backgroundColor}
                  />
                </Box>
              }
              <Box padding={1}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={configuration.transparent}
                      onChange={(event) => setConfiguration({ ...configuration, transparent: event.target.checked })}
                      name="transparent"
                      color="primary"
                    />
                  }
                  label="Transparent background"
                />
              </Box>
              <Button color="primary" type="submit" >
                Save configuration
              </Button>
            </form>
          }

        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box padding={2}>
          <NewTimer />
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
        </Box>
      </Grid>

    </Grid >)
}