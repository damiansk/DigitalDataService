import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  
  constructor(props) {
    super(props);
    
    this.mapColumns = this.mapColumns.bind(this);
  }
  
  mapColumns() {
    const { columns, row } = this.props;
    return row.map((column, index) =>
      <th scope="row"
          key={columns[index].name}
          className={`col-md-${columns[index].size}`}>
        {column}
      </th>
    );
  }
  
  render() {
    return (
      <tr>
        {this.mapColumns()}
      </tr>
    );
  }
}

TableRow.propTypes = {
  columns: PropTypes.array.isRequired,
  row: PropTypes.array.isRequired,
};

export default TableRow;