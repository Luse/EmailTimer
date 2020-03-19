import React from 'react';
import { useDispatch } from "react-redux";
import { postNewTimer, fetchList } from '../../State/ActionCreator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const NewTimer = props => {
    const [targetDate, setTargetDate] = React.useState(null);
    const dispatch = useDispatch();
    console.log('targetDate', targetDate)
    const handleSubmit = (event) => {
        dispatch(postNewTimer(targetDate))
        dispatch(fetchList())
        event.preventDefault();
    }
    
    return <div>
            <form onSubmit={handleSubmit}>
                <TextField type="date" onChange={(event) => setTargetDate(event.target.value)} />
                <Button disabled={!targetDate} color="primary" type="submit" >
                    Save new timer
                </Button>
            </form>
        </div>
}