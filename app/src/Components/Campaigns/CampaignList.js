import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';

export const CampaignList = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
      const dispatch = useDispatch();
      React.useEffect(() => {
          dispatch(fetchCampaigns())
      }, [dispatch])

      console.log('campaigns', campaigns)
      if(campaigns.list.length === 0){
          return <div>
              No Campaigns :(
          </div>
      }
    return <div>Campaigns</div>
}