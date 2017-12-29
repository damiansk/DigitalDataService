import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RejectIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary" to={`/record/update_status/${recordId}/reject`}>
    <i className={`fa fa-ban fa-1x`} aria-hidden="true"/>
  </Link>
);

RejectIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default RejectIconLink;