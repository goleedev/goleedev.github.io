import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from 'routes/Main';
import NotFound from 'routes/NotFound';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        </>
    );
};

export default AppRouter;
