import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';


const RestoreIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'restore'})}>
    <i className={`fa fa-repeat fa-1x`} aria-hidden="true"/>
  </Link>
);

RestoreIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default RestoreIconLink;