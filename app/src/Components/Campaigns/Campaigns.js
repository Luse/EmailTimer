import React from 'react';
import { useDispatch } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';
import {CampaignList} from './CampaignList';
import { Typography, Box } from '@material-ui/core';
import { NewCampaign } from './NewCampaign';
export const Campaigns = () => {
      const dispatch = useDispatch();
      React.useEffect(() => {
          dispatch(fetchCampaigns())
      }, [dispatch])
 
    return <Box width="500px">
        <Typography>
            Campaigns
        </Typography>
    <NewCampaign />
    <CampaignList />
    </Box>
}
