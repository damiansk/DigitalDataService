import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PrimaryHeading from '../../../../components/pages/heading/PrimaryHeading';

class SignIn extends Component {
  
  onSignIn({email, password}) {
    console.log(`Email: ${email}, password: ${password}`);
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
          <form onSubmit={handleSubmit(this.onSignIn.bind(this))}>
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


export default reduxForm({
  form: 'signin'
})(SignIn);