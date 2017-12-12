import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { signInUser } from '../../../../actions/auth';

import PrimaryHeading from '../../../../components/pages/heading/PrimaryHeading';




class SignIn extends Component {
  
  constructor(props) {
    super(props);
    
    this.onSignIn = this.onSignIn.bind(this);
  }
  
  onSignIn({email, password}) {
    this.props.signInUser(email, password);
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
  null,
  {signInUser}
)(SignIn);

export default reduxForm({
  form: 'signin'
})(SignIn);