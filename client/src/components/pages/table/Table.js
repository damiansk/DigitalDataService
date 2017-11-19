import React, { Component } from 'react';

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

export default Table;