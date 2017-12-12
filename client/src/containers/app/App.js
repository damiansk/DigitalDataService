import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import PrivateRoute from '../pages/auth/privateRoute/PrivateRoute';

import Header from '../layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import SignIn from '../pages/auth/signIn/SignIn';
import SignOut from '../pages/auth/singOut/SignOut';
import NewRecord from '../pages/newRecord/NewRecord';
import Records from '../pages/records/Records';
import NoMatch from '../../components/404/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main className="container">
          <Switch>
            <Route exact path="/" to="/records" component={() => <div>Welcome!</div>}/>
            <Route path="/signin" component={SignIn}/>
            <PrivateRoute path="/signout" component={SignOut}/>
            <PrivateRoute path="/new-record" component={NewRecord}/>
            <PrivateRoute path="/records" component={Records}/>
            <PrivateRoute path="/account" component={Account}/>
            <Route component={NoMatch}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

const Account = () => <div>account</div>;

export default App;
