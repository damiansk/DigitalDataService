import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';


const RejectIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'reject'})}>
    <i className={`fa fa-ban fa-1x`} aria-hidden="true"/>
  </Link>
);

RejectIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default RejectIconLink;