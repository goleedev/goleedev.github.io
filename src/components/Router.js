import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from 'routes/Main';
import Archive from 'routes/Archive';
import NotFound from 'routes/NotFound';

const AppRouter = () => {
    return (
        <>
        <Router basename="/">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/home" component={Main} />
                <Route exact path="/archive" component={Archive} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        </>
    );
};

export default AppRouter;
