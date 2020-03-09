import React from 'react';
import { useDispatch } from "react-redux";
import { postNewTimer } from '../../State/ActionCreator';

export const NewTimer = props => {
    const [targetDate, setTargetDate] = React.useState(null);
    const dispatch = useDispatch();
    console.log('targetDate', targetDate)
    const handleSubmit = (event) => {
        dispatch(postNewTimer(targetDate))
        event.preventDefault();
    }
    
    return <div>
            <form onSubmit={handleSubmit}>
                <input type="date" onChange={(event) => setTargetDate(event.target.value)} />
                <input type="submit" value="post new timer" />
            </form>
        </div>
}