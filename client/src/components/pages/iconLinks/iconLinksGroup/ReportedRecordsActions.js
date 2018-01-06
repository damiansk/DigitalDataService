import React from 'react';
import PropTypes from 'prop-types';

import { PreviewIconLink, AcceptIconLink, RejectIconLink, DeleteIconLink } from '..';

const ReportedRecordsActions = ({id}) => (
  <ul className="nav justify-content-center">
    <li className="nav-item"><PreviewIconLink recordId={id}/></li>
    <li className="nav-item"><AcceptIconLink recordId={id}/></li>
    <li className="nav-item"><RejectIconLink recordId={id}/></li>
    <li className="nav-item"><DeleteIconLink recordId={id}/></li>
  </ul>
);

ReportedRecordsActions.propTypes = {
  id: PropTypes.string.isRequired
};

export default ReportedRecordsActions;