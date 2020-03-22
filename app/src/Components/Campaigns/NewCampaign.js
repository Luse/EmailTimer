import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";
import { postNewCampaign, fetchCampaigns } from '../../State/ActionCreator';
export const NewCampaign = () => {
    const [open, setOpen] = React.useState(false);
    const [campaignName, setCampaignName] = React.useState(null);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);
        dispatch(postNewCampaign(campaignName))
        dispatch(fetchCampaigns())
    }

    return <Box>
        <Button onClick={handleClickOpen} variant="outlined">
            New Campaign
    </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Campaign</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lets use a descriptive name for the email campaign
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Campaign Name"
                    type="text"
                    fullWidth
                    onChange={ (event) => setCampaignName(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleSave} color="primary">
                    Submit
          </Button>
            </DialogActions>
        </Dialog>
    </Box>
}