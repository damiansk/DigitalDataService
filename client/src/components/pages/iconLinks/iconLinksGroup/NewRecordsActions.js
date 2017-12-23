import React from 'react';
import PropTypes from 'prop-types';

import { PreviewIconLink, EditIconLink, AcceptIconLink } from '..';

const NewRecordsActions = ({id}) => (
  <ul className="nav justify-content-center">
    <li className="nav-item"><PreviewIconLink recordId={id}/></li>
    <li className="nav-item"><EditIconLink recordId={id}/></li>
    <li className="nav-item"><AcceptIconLink recordId={id}/></li>
  </ul>
);

NewRecordsActions.propTypes = {
  id: PropTypes.string.isRequired
};

export default NewRecordsActions;