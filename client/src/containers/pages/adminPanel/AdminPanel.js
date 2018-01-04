import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import {
  RECORD_PREVIEW,
  SIGN_IN,
  ACCOUNT,
  RECORD_NEW,
  RECORDS,
  SIGN_OUT,
  RECORD_UPDATE_STATUS
} from '../../../constants/routes';
import PrivateRoute from '../auth/privateRoute/PrivateRoute';
import Preview from '../preview/Preview';
import NewRecord from '../newRecord/NewRecord';
import SignOut from '../auth/singOut/SignOut';
import SignIn from '../auth/signIn/SignIn';
import Records from '../records/Records';
import UpdateStatus from '../updateStatus/UpdateStatus';
import { authVerification } from '../../../actions/auth';
import { connect } from 'react-redux';


class AdminPanel extends Component {
  
  componentWillMount() {
    this.props.authVerification();
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.verificationPending ?
          <div>Loading...</div>
          :
          <Switch>
            <Route path={SIGN_IN} component={SignIn}/>
            <Route path={SIGN_OUT} component={SignOut}/>
            <PrivateRoute path={RECORD_NEW} component={NewRecord}/>
            <PrivateRoute path={RECORDS} component={Records}/>
            <PrivateRoute path={ACCOUNT} component={Account}/>
            <PrivateRoute path={RECORD_PREVIEW} component={Preview}/>
            <PrivateRoute path={RECORD_UPDATE_STATUS} component={UpdateStatus}/>
            <Route component={() => <Redirect to={{pathname: SIGN_IN}}/>}/>
          </Switch>
        }
      </React.Fragment>
    );
  }
}

const Account = () => <div>account</div>;

export default connect(
  ({auth}) => ({verificationPending: auth.isChecking}),
  { authVerification }
)(AdminPanel);
