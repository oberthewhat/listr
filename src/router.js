import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/home'

const Router = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />

        </Switch>
    );
};

export default Router;