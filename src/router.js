import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/home'
import Listings from './containers/listings'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/Listings/:id" component={Listings} /> */}
            <Route path="/Listings" component={Listings} />
        </Switch>
    );
};

export default Router;