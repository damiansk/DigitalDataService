import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { signUpUser } from '../../../actions/auth';


class Account extends Component {
  
  constructor(props){
    super(props);
    
    this.onSignUp = this.onSignUp.bind(this);
  }
  
  onSignUp({firstName, lastName, email, password}) {
    this.props.signUpUser(firstName, lastName, email, password, () => window.alert('Created'));
  }
  
  render() {
    return (
      <section>
        <PrimaryHeading title="Account"/>
  
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="row avatar-user">
              <i className="fa fa-user-circle" aria-hidden="true" style={{margin: 'auto', fontSize: '10rem'}}/>
            </div>
            <div className="row">
              <p style={{margin: '30px auto'}}>{`${this.props.user.firstName} ${this.props.user.lastName}`}</p>
            </div>
          </div>
    
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-4">
            <div className="create-account">
              <h3>New account</h3>
              <form onSubmit={this.props.handleSubmit(this.onSignUp)}>
                <div className="form-row">
                  <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mb-3">
                    <label>First name:</label>
                    <Field name="firstName"
                           className="form-control"
                           component="input"
                           type="text"
                           placeholder="First name"/>
                  </div>
                  <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mb-3">
                    <label>Last name:</label>
                    <Field name="lastName"
                           className="form-control"
                           component="input"
                           type="text"
                           placeholder="Last name"/>
                  </div>
                  <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mb-3">
                    <label>Email:</label>
                    <Field name="email"
                           className="form-control"
                           component="input"
                           type="text"
                           placeholder="Email"/>
                  </div>
                  <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 mb-3">
                    <label>Password:</label>
                    <Field name="password"
                           id="signInPassword"
                           className="form-control"
                           component="input"
                           type="password"
                           placeholder="Password"/>
                  </div>
                </div>
                <button className="btn btn-primary col-sm-12 col-md-6 col-lg-3" type="submit">Create</button>
              </form>
            </div>
          </div>
          
        </div>

      </section>
    );
  }
}
Account = connect(
  ({auth}) => ({user: auth.user}),
  { signUpUser }
)(Account);


export default reduxForm({
  form: 'newUser'
})(Account);