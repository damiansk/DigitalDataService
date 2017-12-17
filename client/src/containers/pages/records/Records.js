import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import { fetchUserRecords } from '../../../actions/records';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';
import { Table, TableColumn } from '../../../components/pages/table';
import { PreviewIconLink, EditIconLink, AcceptIconLink } from '../../../components/pages/iconLinks';

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
                             fieldSelector="declarant"
                             className="col-md-2">Declarant</TableColumn>
                <TableColumn fieldSelector="title"
                             className="col-md-4">Title</TableColumn>
                <TableColumn fieldSelector="resourceType"
                             className="col-md-2">Type</TableColumn>
                <TableColumn fieldFormatter={keywords => keywords.join(' ')}
                             fieldSelector="keywords"
                             className="col-md-2">Keywords</TableColumn>
                <TableColumn fieldFormatter={() =>
                                <ul className="nav justify-content-center">
                                  <li className="nav-item"><PreviewIconLink recordId={321}/></li>
                                  <li className="nav-item"><EditIconLink recordId={321}/></li>
                                  <li className="nav-item"><AcceptIconLink recordId={321}/></li>
                                </ul>}
                             fieldSelector="actions"
                             className="col-md-2">Actions</TableColumn>
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