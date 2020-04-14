import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Dashboard } from '../Components/Dashboard/Dashboard';
import { PublicPage } from '../Components/PublicPage/PublicPage';

import { Timers } from "../Components/Timers/Timers";
import { Campaigns } from "../Components/Campaigns/Campaigns";
import { DashboardLanding } from "../Components/DashboardLanding/DashboardLanding";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Register/Register";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PublicPage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <AuthenticatedRoute>
                    <Dashboard>
                        <Route exact path="/dashboard" component={DashboardLanding} />
                        <Route path="/dashboard/timers" component={Timers} />
                        <Route exact path="/dashboard/campaigns" component={Campaigns} />
                        <Route path="/dashboard/Campaigns/:id" component={Timers} />
                    </Dashboard>
                </AuthenticatedRoute>
            </Switch>
        </BrowserRouter>
    );
}

const AuthenticatedRoute = ({ children, component: Component, ...rest }) => {
    const [token] = React.useState(localStorage.getItem('token') || false);
    return (
        <Route
            {...rest}
            render={( location ) =>
                token ? (
                    children
                ) : (
                        <Redirect
                        {...rest}
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


