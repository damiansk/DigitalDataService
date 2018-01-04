import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_EDIT } from '../../../constants/routes';


const EditIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_EDIT, {id: recordId})}>
    <i className={`fa fa-pencil-square-o fa-1x`} aria-hidden="true"/>
  </Link>
);

EditIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default EditIconLink;