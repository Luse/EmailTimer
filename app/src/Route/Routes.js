import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { LoginRegisterContainer } from '../Components/LoginRegisterContainer/LoginRegisterContainer';
import { Dashboard } from '../Components/Dashboard/Dashboard';
import { PublicPage } from '../Components/PublicPage/PublicPage';

import { Timers } from "../Components/Timers/Timers";
import { Campaigns } from "../Components/Campaigns/Campaigns";
export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PublicPage />
                </Route>
                <Route path="/login">
                    <LoginRegisterContainer />
                </Route>
                <AuthenticatedRoute path="/dashboard">
                    <Dashboard>
                        <Route exact path="/dashboard" component={Timers} />
                        <Route path="/dashboard/timers" component={Timers} />
                        <Route path="/dashboard/Campaigns" component={Campaigns} />
                    </Dashboard>
                </AuthenticatedRoute>
            </Switch>
        </BrowserRouter>
    );
}

const AuthenticatedRoute = ({ children, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={( props ) =>
                localStorage.getItem('token') ? (
                    children
                ) : (
                        <Redirect
                        {...rest}
                            to={{
                                pathname: "/login",
                            }}
                        />
                    )
            }
        />
    );
}


