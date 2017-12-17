import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PreviewIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary" to={`/record/preview/${recordId}`}>
    <i className={`fa fa-eye fa-1x`} aria-hidden="true"/>
  </Link>
);

PreviewIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default PreviewIconLink;