import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyTable from './MyTable';
import PersonDetails from './PersonDetails'

function SwitchAndRoute() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MyTable} />
                <Route exact path="/:presion" component={PersonDetails} />
            </Switch>
            <br/>
        </Router>
    )

}
export default SwitchAndRoute;