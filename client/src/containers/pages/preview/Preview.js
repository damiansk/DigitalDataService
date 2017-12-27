import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRecord } from '../../../actions/records';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import RecordPreview from '../../../components/pages/recordPreview/RecordPreview';


class Preview extends Component {
  
  componentWillMount() {
    this.props.fetchRecord(this.props.match.params.id);
  }
  
  render() {
    const { isFetching, record } = this.props.record;
    
    return (
      <section>
        <PrimaryHeading title="Record preview"/>
        <article>
          {
            isFetching ?
              <div>Loading record...</div>
            : !record ?
              <div>Record not found...</div>
            :
              <RecordPreview {...record} keywords={record.keywords.join(' ')}/>
          }
        </article>
      </section>
    );
  }
}

export default connect(
  ({record}) => ({record: record.activeRecord}),
  {fetchRecord}
)(Preview);