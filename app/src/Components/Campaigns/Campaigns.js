import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';
import {CampaignList} from './CampaignList';
import { Typography, Box } from '@material-ui/core';
export const Campaigns = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
      const dispatch = useDispatch();
      React.useEffect(() => {
          dispatch(fetchCampaigns())
      }, [dispatch])

      console.log('campaigns', campaigns)
      if(campaigns.list.length === 0){
          
      }
    return <Box>
        <Typography>
            Campagins
        </Typography>
    <CampaignList />
    </Box>
}