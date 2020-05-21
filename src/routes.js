import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/" exact component={Feed} />
        <PrivateRoute path="/new_post" component={NewPost} />
        <PrivateRoute path="/edit_post" component={EditPost} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
