import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import {
  fetchUserRecords,
  fetchReportedRecords,
  fetchAcceptedRecords,
  fetchRejectedRecords
} from '../../../actions/records';
import {
  RECORDS,
  RECORDS_NEW,
  RECORDS_REPORTED,
  RECORDS_ACCEPTED,
  RECORDS_REJECTED
} from '../../../constants/routes';
import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import { NavTab, RoutedTabs } from '../../../components/pages/routedTabs';
import {
  RejectedRecordsTable,
  AcceptedRecordsTable,
  ReportedRecordsTable,
  NewRecordsTable
} from '../../../components/pages/recordsTables';


class Records extends Component {
  
  componentWillMount() {
    this.props.fetchUserRecords();
    this.props.fetchReportedRecords();
    this.props.fetchAcceptedRecords();
    this.props.fetchRejectedRecords();
  }
  
  render() {
    const { path: currentPath} = this.props.match;
    const { userRecords, reportedRecords, acceptedRecords, rejectedRecords } = this.props;
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
            <Route path={RECORDS_REJECTED} render={() => <RejectedRecordsTable records={rejectedRecords.list}/>}/>
          </Switch>
          
        </article>
      </section>
    )
  }
}

const mapStateToProps = ({records}) => ({
  userRecords: records.userRecords,
  reportedRecords: records.reportedRecords,
  acceptedRecords: records.acceptedRecords,
  rejectedRecords: records.rejectedRecords
});

const mapDispatchToProps =  {
  fetchUserRecords,
  fetchReportedRecords,
  fetchAcceptedRecords,
  fetchRejectedRecords
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Records);