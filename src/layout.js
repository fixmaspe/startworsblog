import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import People from './views/people';
import Planets from './views/planets';
import NotFound from './views/notfound';
import Vehicles from './views/vehicles';
import Home from './views/home';
import About from './views/about';
import AboutPlanets from './views/aboutplanets';
import AboutVehicles from './views/aboutvehicles';

const Layout = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path={"/vehicles"} component={Vehicles} />
                <Route exact path={"/planets"} component={Planets} />
                <Route exact path={"/people"} component={People} />
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/aboutplanets"} component={AboutPlanets} />
                <Route exact path={"/aboutvehicles"} component={AboutVehicles} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Layout