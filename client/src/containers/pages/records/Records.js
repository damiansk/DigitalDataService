import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import { fetchUserRecords, fetchReportedRecords } from '../../../actions/records';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';
import NewRecordsTable from '../../../components/pages/recordsTables/NewRecordsTable';
import ReportedRecordsTable from '../../../components/pages/recordsTables/ReportedRecordsTable';


class Records extends Component {
  
  componentWillMount() {
    this.props.fetchUserRecords();
    this.props.fetchReportedRecords();
  }
  
  render() {
    const { path: currentPath} = this.props.match;
    const { userRecords, reportedRecords } = this.props;
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
            <Route path={`${currentPath}/new`} render={() => <NewRecordsTable records={userRecords.list}/>}/>
            <Route path={`${currentPath}/reported`} render={() => <ReportedRecordsTable records={reportedRecords.list}/>}/>
          </Switch>
          
        </article>
      </section>
    )
  }
}

export default connect(
  ({records}) => ({
    userRecords: records.userRecords,
    reportedRecords: records.reportedRecords
  }),
  {fetchUserRecords, fetchReportedRecords}
)(Records);