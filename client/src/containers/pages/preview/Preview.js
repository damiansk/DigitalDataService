import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRecord, fetchPublicRecord, removeActiveRecord } from '../../../actions/record';

import PrimaryHeading from '../../../components/pages/heading/PrimaryHeading';
import RecordPreview from '../../../components/pages/recordPreview/RecordPreview';


class Preview extends Component {
  
  componentWillMount() {
    if(this.props.isPublic) {
      this.props.fetchPublicRecord(this.props.match.params.id);
    } else {
      this.props.fetchRecord(this.props.match.params.id);
    }
    
  }
  
  componentWillUnmount() {
    this.props.removeActiveRecord();
  }
  
  render() {
    const { isFetching, record } = this.props.record;
  
    return (
      <section>
        <PrimaryHeading title={(record && record.title) || 'Record preview'}/>
        <article>
          {
            isFetching ?
              <div>Loading record...</div>
            : !record ?
              <div>Record not found...</div>
            :
              <RecordPreview isPublic={this.props.isPublic}
                             {...record}
                             keywords={record.keywords.join(' ')}/>
          }
        </article>
      </section>
    );
  }
}

Preview.propTypes = {
  isPublic: PropTypes.bool
};

export default connect(
  ({record}) => ({record: record.activeRecord}),
  {fetchRecord, fetchPublicRecord, removeActiveRecord}
)(Preview);