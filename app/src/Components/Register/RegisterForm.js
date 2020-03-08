import React from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../State/States/User';

export const RegisterForm = props => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(register(username, password))
        event.preventDefault();
    }
    return <div style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
        <form onSubmit={handleSubmit}>
            <div style={{ flex: "auto", }}>
                <input type="text" onChange={(event) => setUsername(event.target.value)} id="name" placeholder="Username" name="name" required
                />
            </div>
            <div style={{ flex: "auto", }}>
                <input type="password" onChange={(event) => setPassword(event.target.value)} id="password" placeholder="Password" name="password" required
                />
            </div>
            <div>
                <input type="submit" value="Register" />
            </div>
        </form>
    </div>
}