import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reportRecord } from '../../../actions/record';

class UpdateStatus extends Component {
  
  constructor(props) {
    super(props);
    
    this.updateRecordStatus = {
      'report': this.props.reportRecord
    }
  }
  
  componentWillMount() {
    const { recordId, newStatus } = this.props.match.params;
    
    this.updateRecordStatus[newStatus](recordId);
  }
  
  render() {
    return (
      <div>Changing status</div>
    );
  }
}

export default connect(null, {reportRecord})(UpdateStatus);
