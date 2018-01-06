import React from 'react';
import PropTypes from 'prop-types';

import { PreviewIconLink, ResetIconLink, DeleteIconLink } from '..';

const RejectedRecordsActions = ({id}) => (
  <ul className="nav justify-content-center">
    <li className="nav-item"><PreviewIconLink recordId={id}/></li>
    <li className="nav-item"><ResetIconLink recordId={id}/></li>
    <li className="nav-item"><DeleteIconLink recordId={id}/></li>
  </ul>
);

RejectedRecordsActions.propTypes = {
  id: PropTypes.string.isRequired
};

export default RejectedRecordsActions;