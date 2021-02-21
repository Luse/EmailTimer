import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from "../../State/ActionCreator";
import { Typography, Box } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export const CampaignList = () => {
  const { campaigns } = useSelector((state) => ({
    campaigns: state.campaignsReducer,
  }));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  if (campaigns.list.length === 0) {
    return (
      <Box padding={4}>
        <Typography align="center">
          Click the button on the right to add your first campaign
        </Typography>
      </Box>
    );
  }
  return (
    <Grid item>
      <List>
        {campaigns.list.map((a, index) => (
          <ListItem
            key={index}
            component={Link}
            to={`/dashboard/campaigns/${a.id}`}
            button
          >
            <ListItemText secondary={a.createdAt} primary={a.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
