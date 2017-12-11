import React from 'react';
import PropTypes from 'prop-types';

const LinkWithIcon = ({ iconClass, url }) => (
  <a href={url}>
    <i className={`fa ${iconClass} fa-1x`} aria-hidden="true"/>
  </a>
);

LinkWithIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkWithIcon;