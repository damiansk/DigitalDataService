import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';


const ReportIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'report'})}>
    <i className={`fa fa-paper-plane-o fa-1x`} aria-hidden="true"/>
  </Link>
);

ReportIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default ReportIconLink;