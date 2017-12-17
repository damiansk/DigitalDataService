import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  
  componentWillMount() {
    this.fieldsConfig = React.Children
      .map(this.props.children, ({props}) => props && {
        selector: props.fieldSelector,
        formatData: props.fieldFormatter,
        className: props.className
      });
  }
  
  renderRowCells(row, rowIndex) {
    return this.fieldsConfig.map(({selector, formatData, className}, index) =>
      <th key={`row${rowIndex}-${index}`}
          className={`font-weight-light ${className}`}
          scope="row">
        {formatData(row[selector]) || '-'}
      </th>
    )
  }
  
  renderRows() {
    return this.props.data.map((row, index) =>
        <tr key={index}>{this.renderRowCells(row, index)}</tr>
    );
  }
  
  render() {
    return (
      <table className="table table-responsive-md table-striped table-bordered">
        <thead className="thead-dark">
          <tr>{this.props.children}</tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  data: PropTypes.array
};

export default Table;