import React from "react";
import { useDispatch } from "react-redux";
import { postNewTimer } from "../../State/ActionCreator";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
export const NewTimer = (props) => {
  const [targetDate, setTargetDate] = React.useState(null);
  const dispatch = useDispatch();
  let { id } = useParams();
  const handleSubmit = (event) => {
    dispatch(postNewTimer(id, targetDate));
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="date"
          onChange={(event) => setTargetDate(event.target.value)}
        />
        <Button disabled={!targetDate} color="primary" type="submit">
          New timer
        </Button>
      </form>
    </div>
  );
};
