import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_UPDATE_STATUS } from '../../../constants/routes';


const AcceptIconLink = ({recordId}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(RECORD_UPDATE_STATUS, {recordId, newStatus: 'accept'})}>
    <i className={`fa fa-check-square-o fa-1x`} aria-hidden="true"/>
  </Link>
);

AcceptIconLink.propTypes = {
  recordId: PropTypes.string.isRequired
};

export default AcceptIconLink;