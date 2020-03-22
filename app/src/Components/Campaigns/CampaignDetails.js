import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from '../../State/ActionCreator';

export const CampaignDetails = () => {
    const { campaigns } = useSelector(state => ({
        campaigns: state.campaignsReducer,
    }));
      const dispatch = useDispatch();
      React.useEffect(() => {
          dispatch(fetchCampaigns())
      }, [dispatch])

    return <div>Details</div>
}