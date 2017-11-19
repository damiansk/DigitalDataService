import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  
  constructor(props) {
    super(props);
    
    this.mapColumns = this.mapColumns.bind(this);
  }
  
  mapColumns() {
    return this.props
      .columns
      .map((column, index) => <th key={index} scope="col">{column}</th>);
  }
  
  render() {
    return (
      <table className="table table-responsive-lg table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            {this.mapColumns()}
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired
};

export default Table;