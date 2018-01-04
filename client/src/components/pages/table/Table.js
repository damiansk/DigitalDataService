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
      <div>
        <table className="table table-responsive-sm table-striped table-bordered">
          <thead className="thead-dark">
            <tr>{this.props.children}</tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        {
          (!this.props.data || !this.props.data.length)
          && <p className="text-center font-weight-light mt-4">No data to show</p>
        }
      </div>
    )
  }
}

Table.propTypes = {
  data: PropTypes.array
};

export default Table;