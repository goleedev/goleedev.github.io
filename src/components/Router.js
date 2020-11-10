import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from 'routes/Main';
import Blog from 'routes/Blog';
import BlogDetail from 'routes/BlogDetail';
import NotFound from 'routes/NotFound';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog:id" component={BlogDetail} />
                <Route component={NotFound} />
            </Switch>
        </Router>
        </>
    );
};

export default AppRouter;
