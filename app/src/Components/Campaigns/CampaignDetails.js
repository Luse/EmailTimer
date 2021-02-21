import React from "react";
import { useDispatch } from "react-redux";
import { fetchCampaigns } from "../../State/ActionCreator";

export const CampaignDetails = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return <div>Details</div>;
};
