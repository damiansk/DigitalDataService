import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPublicRecords } from '../../../actions/records';


class PublicRecords extends Component {
  
  componentWillMount() {
    this.props.fetchPublicRecords();
  }
  
  render() {
    return(
      <div>Public Records</div>
    );
  }
}

export default connect(
  ({records}) => ({records: records.publicRecords}),
  {fetchPublicRecords}
)(PublicRecords);