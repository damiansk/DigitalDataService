import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Header from '../containers/layout/header/Header';
import Footer from './layout/footer/Footer';
import NewRecord from '../containers/pages/newRecord/NewRecord';
import Records from '../containers/pages/records/Records';
import NoMatch from './404';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main className="container">
          <Switch>
            <Route exact path="/" to="/records" component={props => <div>Welcome!</div>}/>
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
