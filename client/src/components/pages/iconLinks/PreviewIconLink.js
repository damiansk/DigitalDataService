import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { mapPathVariables, RECORD_PREVIEW } from '../../../constants/routes';


const PreviewIconLink = ({recordId, to}) => (
  <Link className="nav-link text-secondary"
        to={mapPathVariables(to || RECORD_PREVIEW, {id: recordId})}>
    <i className={`fa fa-eye fa-1x`} aria-hidden="true"/>
  </Link>
);

PreviewIconLink.propTypes = {
  recordId: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default PreviewIconLink;