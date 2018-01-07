import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPublicRecords, searchRecords } from '../../../actions/records';
import PublicRecordsTable from '../../../components/pages/recordsTables/PublicRecordsTable';
import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';


class PublicRecords extends Component {
  
  componentWillMount() {
    const term = this.props.match.params.term;
    if(term) {
      this.props.searchRecords(term);
    } else {
      this.props.fetchPublicRecords();
    }
  }
  
  componentWillUpdate(nextProps) {
    const term = this.props.match.params.term;
    const nextTerm = nextProps.match.params.term;
  
    if(term !== nextTerm) {
      if(term) {
        this.props.searchRecords(term);
      } else {
        this.props.fetchPublicRecords();
      }
    }
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
  {fetchPublicRecords, searchRecords}
)(PublicRecords);