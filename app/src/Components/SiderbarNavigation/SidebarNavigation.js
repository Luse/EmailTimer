import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';



export const SidebarNavigation = props => (
<Grid item>
  <List component="nav">
  <ListItem component={Link} to="/dashboard"  button>
          <ListItemIcon>
              <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/dashboard/campaigns"  button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Campaigns" />
      </ListItem>
      <ListItem  button>
          <ListItemIcon>
              <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
      </ListItem>
  </List>
</Grid>
)