import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTimer, fetchList } from '../../State/ActionCreator';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export const DeleteTimerButton = props => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTimer(props.id))
        .then(dispatch(fetchList()))
    }

    return (
    <IconButton onClick={handleDelete} edge="end" aria-label="Delete icon">
        <DeleteIcon />
    </IconButton>)
}