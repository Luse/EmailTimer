import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { deleteTimer, fetchList } from '../../State/ActionCreator';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export const DeleteTimerButton = props => {
    const { user, gifs } = useSelector(state => ({
        user: state.userReducer,
        gifs: state.gifsReducer
    }));

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