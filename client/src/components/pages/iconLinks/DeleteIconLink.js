import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';


const DeleteIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'delete'})}>
    <i className={`fa fa-trash-o fa-1x`} aria-hidden="true"/>
  </Link>
);

DeleteIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default DeleteIconLink;