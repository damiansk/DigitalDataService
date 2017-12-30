import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';

import PrivateRoute from '../pages/auth/privateRoute/PrivateRoute';

import Header from '../layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import SignIn from '../pages/auth/signIn/SignIn';
import SignOut from '../pages/auth/singOut/SignOut';
import NewRecord from '../pages/newRecord/NewRecord';
import Records from '../pages/records/Records';
import Preview from '../pages/preview/Preview';
import NoMatch from '../../components/404/index';
import UpdateStatus from '../pages/updateStatus/UpdateStatus';

import { authVerification } from '../../actions/auth';


class App extends Component {
  
  componentWillMount() {
    this.props.authVerification();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <main className="container">
          {this.props.verificationPending ?
            <div>Loading...</div>
            :
            <Switch>
              <Route exact path="/" component={() => <Redirect to={{pathname: '/records'}}/>}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signout" component={SignOut}/>
              <PrivateRoute path="/new-record" component={NewRecord}/>
              <PrivateRoute path="/records" component={Records}/>
              <PrivateRoute path="/account" component={Account}/>
              <PrivateRoute path="/record/preview/:id" component={Preview}/>
              <PrivateRoute path="/record/update_status/:id/:status" component={UpdateStatus}/>
              <Route component={NoMatch}/>
            </Switch>
          }
        </main>
        <Footer/>
      </div>
    );
  }
}

const Account = () => <div>account</div>;

export default connect(
  ({auth}) => ({verificationPending: auth.isChecking}),
  { authVerification }
)(App);
