import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export const CampaignList = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCampaigns())
    }, [dispatch])

    if (campaigns.list.length === 0) {
        return <Typography>
            No Campaigns yet :(
           </Typography>
    }
    return <Grid item>
            <List >
        {campaigns.list.map( (a, index) =>
             <ListItem key={index} component={Link} to={`/dashboard/campaigns/${a.id}`} button>
             <ListItemText secondary={a.createdAt} primary={a.name} />
           </ListItem>    
        )}
        </List>
    </Grid>
}