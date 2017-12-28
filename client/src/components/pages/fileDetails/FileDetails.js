import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FileDetails extends Component {
  
  render() {
    const { name } = this.props.file;
    
    return (
      <div className="container mb-4">
        <article className="row">
          <h5>{name}</h5>
          <button className="btn btn-secondary"
                  onClick={this.props.fetchFile}>
            Fetch
          </button>
        </article>
      </div>
    )
  }
}


FileDetails.propTypes = {
  file: PropTypes.object.isRequired,
  fetchFile: PropTypes.func.isRequired
};

export default FileDetails;