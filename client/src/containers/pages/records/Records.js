import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';

class Records extends Component {
  
  constructor(props) {
    super(props);
    
  }
 
  render() {
    const { path: currentPath} = this.props.match;
    return (
      <section>
        <PrimaryHeading title="Records"/>
        <article>
          <RoutedTabs parentPath={currentPath}>
            <NavTab path="/new">New</NavTab>
            <NavTab path="/reported">Reported</NavTab>
            <NavTab path="/accepted">Accepted</NavTab>
            <NavTab path="/rejected">Rejected</NavTab>
          </RoutedTabs>
        
          <Switch>
            <Route exact path={currentPath} render={() => <Redirect to={`${this.props.match.path}/new`} />}/>
            <Route path={`${currentPath}`} render={() => <div>New</div>}/>
          </Switch>
          
        </article>
      </section>
    )
  }
}

export default Records;