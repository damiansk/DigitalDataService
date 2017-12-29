import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AcceptIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary" to={`/record/update_status/${recordId}/accept`}>
    <i className={`fa fa-check-square-o fa-1x`} aria-hidden="true"/>
  </Link>
);

AcceptIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default AcceptIconLink;