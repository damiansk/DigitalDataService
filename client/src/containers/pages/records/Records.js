import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import {
  fetchUserRecords,
  fetchReportedRecords,
  fetchAcceptedRecords
} from '../../../actions/records';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';
import {
  AcceptedRecordsTable,
  ReportedRecordsTable,
  NewRecordsTable
} from '../../../components/pages/recordsTables';
import { RECORDS, RECORDS_ACCEPTED, RECORDS_NEW, RECORDS_REPORTED } from '../../../constants/routes';


class Records extends Component {
  
  componentWillMount() {
    this.props.fetchUserRecords();
    this.props.fetchReportedRecords();
    this.props.fetchAcceptedRecords();
  }
  
  render() {
    const { path: currentPath} = this.props.match;
    const { userRecords, reportedRecords, acceptedRecords } = this.props;
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
            <Route exact path={RECORDS} render={() => <Redirect to={RECORDS_NEW} />}/>
            <Route path={RECORDS_NEW} render={() => <NewRecordsTable records={userRecords.list}/>}/>
            <Route path={RECORDS_REPORTED} render={() => <ReportedRecordsTable records={reportedRecords.list}/>}/>
            <Route path={RECORDS_ACCEPTED} render={() => <AcceptedRecordsTable records={acceptedRecords.list}/>}/>
          </Switch>
          
        </article>
      </section>
    )
  }
}

export default connect(
  ({records}) => ({
    userRecords: records.userRecords,
    reportedRecords: records.reportedRecords,
    acceptedRecords: records.acceptedRecords
  }),
  {fetchUserRecords,
    fetchReportedRecords,
    fetchAcceptedRecords}
)(Records);