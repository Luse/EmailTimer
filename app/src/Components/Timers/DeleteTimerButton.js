import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTimer, fetchList } from "../../State/ActionCreator";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router-dom";

export const DeleteTimerButton = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const handleDelete = () => {
    dispatch(deleteTimer(props.id, id)).then(dispatch(fetchList(id)));
  };

  return (
    <IconButton onClick={handleDelete} edge="end" aria-label="Delete icon">
      <DeleteIcon />
    </IconButton>
  );
};
DeleteTimerButton.propTypes = {
  id: PropTypes.number.isRequired,
};
