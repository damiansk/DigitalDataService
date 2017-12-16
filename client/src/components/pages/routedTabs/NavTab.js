import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const NavTab = props => (
  <NavLink className="nav-item nav-link text-secondary"
           style={{outline: 0}}
           activeClassName="active"
           exact={true}
           to={props.path}>
    {props.children}
  </NavLink>
);

NavTab.propTypes = {
  path: PropTypes.string.isRequire
};

export default NavTab;