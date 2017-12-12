import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        //TODO After login redirect user to this location
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default connect(
  state => ({authenticated: state.auth.authenticated})
)(PrivateRoute);