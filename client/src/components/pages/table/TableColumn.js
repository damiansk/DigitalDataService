import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableColumn extends Component {
  
  render() {
    return <th scope="col">{this.props.children}</th>;
  }
}

TableColumn.defaultProps = {
  fieldFormatter: data => data,
  className: ''
};

TableColumn.propTypes = {
  fieldSelector: PropTypes.string.isRequired,
  fieldFormatter: PropTypes.func,
  className: PropTypes.string
};

export default TableColumn;