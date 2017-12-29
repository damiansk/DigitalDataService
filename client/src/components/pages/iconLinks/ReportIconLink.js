import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReportIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary" to={`/record/update_status/${recordId}/report`}>
    <i className={`fa fa-paper-plane-o fa-1x`} aria-hidden="true"/>
  </Link>
);

ReportIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default ReportIconLink;