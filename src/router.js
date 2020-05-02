import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/home'
import Listings from './containers/listings'

const Router = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/listings" component={Listings} />
        </Switch>
    );
};

export default Router;