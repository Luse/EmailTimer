import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';
import {CampaignList} from './CampaignList';
import { Typography, Box } from '@material-ui/core';
import { NewCampaign } from './NewCampaign';
export const Campaigns = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
      const dispatch = useDispatch();
      React.useEffect(() => {
          dispatch(fetchCampaigns())
      }, [dispatch])
 
    return <Box>
        <Typography>
            Campaigns
        </Typography>
    <NewCampaign />
    <CampaignList />
    </Box>
}