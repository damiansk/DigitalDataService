import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import PrimaryHeading from '../../../../components/pages/heading/PrimaryHeading';
import { RECORDS } from '../../../../constants/routes';
import { signInUser } from '../../../../actions/auth';

//TODO After login redirect user to saved path and protect this route when the user is already logged in
class SignIn extends Component {
  
  constructor(props) {
    super(props);
    
    this.onSignIn = this.onSignIn.bind(this);
  }
  
  onSignIn({email, password}) {
    const locationState = this.props.location.state;
    const redirect = (locationState && locationState.from) || RECORDS;
    this.props.signInUser(email, password, redirect);
  }
  
  renderErrorMessage() {
    const {errorMsg} = this.props;
    if (errorMsg) {
      return (
        <div className="alert alert-danger">
          <small>{errorMsg}</small>
        </div>
      );
    }
  }
  
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
    } = this.props;
    
    return(
      <main className="container">
        <PrimaryHeading title="Sign In"/>
        <div className="col-md-6 col-lg-4 m-auto">
          <form onSubmit={handleSubmit(this.onSignIn)}>
            <fieldset className="form-group">
              <label htmlFor="signInEmail">Email</label>
              <Field name="email"
                     id="signInEmail"
                     className="form-control"
                     aria-describedby="emailHelp"
                     component="input"
                     type="text"
                     placeholder="Email"/>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="signInPassword">Password</label>
              <Field name="password"
                     id="signInPassword"
                     className="form-control"
                     component="input"
                     type="password"
                     placeholder="Password"/>
            </fieldset>
            {this.renderErrorMessage()}
            <button className="btn btn-primary"
                    type="submit"
                    disabled={pristine || submitting}>
              Sign In
            </button>
          </form>
        </div>
      </main>
    );
  }
}

SignIn = connect(
  state => ({errorMsg: state.auth.error}),
  { signInUser }
)(SignIn);

export default reduxForm({
  form: 'signin'
})(SignIn);