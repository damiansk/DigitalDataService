import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPublicRecords } from '../../../actions/records';
import PublicRecordsTable from '../../../components/pages/recordsTables/PublicRecordsTable';
import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';


class PublicRecords extends Component {
  
  componentWillMount() {
    this.props.fetchPublicRecords();
  }
  
  render() {
    return(
      <section>
        <PrimaryHeading title="Records"/>
        <article>
          <PublicRecordsTable records={this.props.records.list}/>
        </article>
      </section>
    );
  }
}

export default connect(
  ({records}) => ({records: records.publicRecords}),
  {fetchPublicRecords}
)(PublicRecords);