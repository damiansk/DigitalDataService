import React from 'react';
import PropTypes from 'prop-types';

const RoutedTabs = ({ children, parentPath }) => (
  <nav className="nav nav-tabs nav-fill mb-5" role="tablist">
    {
      React.Children.map(children, child =>
        React.cloneElement(child, {path: parentPath + child.props.path}))
    }
  </nav>
);

RoutedTabs.propTypes = {
  parentPath: PropTypes.string
};

export default RoutedTabs;