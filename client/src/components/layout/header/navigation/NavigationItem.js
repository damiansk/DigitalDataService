import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = props => (
  <li className={`nav-item ${props.activeClass}`}>
    <Link className="nav-link" to={props.link}>
      <i className={`fa ${props.iconClass}`} aria-hidden="true"/>
      {` ${props.name}`} {props.activeClass && <span className="sr-only">(current)</span>}
    </Link>
  </li>
);


NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  activeClass: PropTypes.string
};

export default NavigationItem;