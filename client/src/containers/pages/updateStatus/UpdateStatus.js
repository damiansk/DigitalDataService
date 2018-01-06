import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import {
  reportRecord,
  acceptRecord,
  rejectRecord,
  restoreRecord,
  removeRecord
} from '../../../actions/record';


class UpdateStatus extends Component {
  
  constructor(props) {
    super(props);
    
    this.updateRecordStatus = {
      'report': this.props.reportRecord,
      'accept': this.props.acceptRecord,
      'reject': this.props.rejectRecord,
      'restore': this.props.restoreRecord,
      'delete': this.props.removeRecord
    }
  }
  
  componentWillMount() {
    const { recordId, newStatus } = this.props.match.params;
    
    this.updateRecordStatus[newStatus](recordId);
  }
  
  componentDidUpdate() {
    const { isPending, updated } = this.props.recordStatus;
    
    if(!isPending && updated) {
      setTimeout(() => this.props.goBack(), 3000);
    }
  }
  
  render() {
    const { isPending, updated, error } = this.props.recordStatus;
    return (
      <main className="container">
          {isPending || !updated ?
            <p className="mt-4">Please wait...</p>
            :
            updated ?
              <p className="mt-4">Record successfully updated, you will back to previous page in 3 seconds...</p>
              :
              <p className="mt-4">{error}</p>
          }
      </main>
    );
  }
}

const mapDispatchToProps = {
  reportRecord,
  acceptRecord,
  rejectRecord,
  restoreRecord,
  removeRecord,
  goBack
};

export default connect(
  ({record}) => ({recordStatus: record.recordStatus}),
  mapDispatchToProps
)(UpdateStatus);
