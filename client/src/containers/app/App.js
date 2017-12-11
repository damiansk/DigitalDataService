import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Header from '../layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import SignIn from '../../containers/pages/auth/signin/SignIn';
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
            <Route exact path="/" to="/records" component={props => <div>Welcome!</div>}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/new-record" component={NewRecord}/>
            <Route path="/records" component={Records}/>
            <Route path="/account" component={Account}/>
            <Route component={NoMatch}/>
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}

const Account = props => <div>account</div>;

export default App;
