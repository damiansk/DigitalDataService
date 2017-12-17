import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import { fetchUserRecords } from '../../../actions/records';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';
import { Table, TableColumn } from '../../../components/pages/table';

class Records extends Component {
  
  constructor(props) {
    super(props);
    
  }
 
  componentWillMount() {
    this.props.fetchUserRecords();
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
            <Route path={`${currentPath}/new`} render={() =>
              <Table data={this.props.userRecords}>
                <TableColumn fieldFormatter={({firstName, lastName}) => `${firstName} ${lastName}`}
                             fieldSelector="declarant">Declarant</TableColumn>
                <TableColumn fieldSelector="title">Title</TableColumn>
                <TableColumn fieldSelector="resourceType">Type</TableColumn>
                <TableColumn fieldFormatter={keywords => keywords.join(' ')}
                             fieldSelector="keywords">Keywords</TableColumn>
                <TableColumn fieldSelector="actions">Actions</TableColumn>
              </Table>
            }/>
          </Switch>
          
        </article>
      </section>
    )
  }
}

export default connect(
  ({records}) => ({userRecords: records.userRecords}),
  {fetchUserRecords}
)(Records);