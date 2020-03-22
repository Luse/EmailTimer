import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

export const CampaignList = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchCampaigns())
    }, [dispatch])

    console.log('campaigns', campaigns)
    if (campaigns.list.length === 0) {
        return <Typography>
            No Campaigns yet :(
           </Typography>
    }
    return <Box>
        <Typography>
        Campaigns:
            </Typography>
            <List >
        {campaigns.list.map( a =>
             <ListItem button>
             <ListItemText secondary={a.createdAt} primary={a.name} />
           </ListItem>    
        )}
        </List>
    </Box>
}