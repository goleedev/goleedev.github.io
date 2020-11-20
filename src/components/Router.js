import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from 'routes/Main';
import Blog from 'routes/Blog';
import BlogDetail from 'routes/BlogDetail';
import Archive from 'routes/Archive';
import NotFound from 'routes/NotFound';

const AppRouter = () => {
    return (
        <>
        <Router basename="/">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/home" component={Main} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog:id" component={BlogDetail} />
                <Route exact path="/archive" component={Archive} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        </>
    );
};

export default AppRouter;
