import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Header from '../layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import PublicRecords from '../pages/publicRecords/PublicRecords';
import AdminPanel from '../pages/adminPanel/AdminPanel';
import Preview from '../pages/preview/Preview';
import { ADMIN, PUBLIC_RECORD_PREVIEW } from '../../constants/routes';


const App = () => (
  <div>
    <Header/>
    <main className="container">
        <Switch>
          <Route exact path="/" component={PublicRecords}/>
          <Route path={PUBLIC_RECORD_PREVIEW} render={props => <Preview {...props} isPublic/>}/>
          <Route path={ADMIN} component={AdminPanel}/>
          <Route component={() => <Redirect to={{pathname: '/'}}/>}/>
        </Switch>
    </main>
    <Footer/>
  </div>
);

export default App;
