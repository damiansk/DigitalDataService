import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EditIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary" to={`/record/edit/${recordId}`}>
    <i className={`fa fa-pencil-square-o fa-1x`} aria-hidden="true"/>
  </Link>
);

EditIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default EditIconLink;