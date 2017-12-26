import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRecord } from '../../../actions/records';


class RecordPreview extends Component {
  
  componentWillMount() {
    this.props.fetchRecord(this.props.match.params.id);
  }
  
  render() {
    return (
      <div>RecordPreview</div>
    );
  }
}

export default connect(null, {fetchRecord})(RecordPreview);