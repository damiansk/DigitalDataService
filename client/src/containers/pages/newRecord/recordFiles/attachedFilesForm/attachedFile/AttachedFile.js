import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AttachedFile extends Component {
  
  render() {
    const { file: {name, size}, onRemove } = this.props;
  
    console.log(this.props.file);
  
    return (
      <li className="list-group-item position-relative">
        <section className="row">
          <aside className="col-xs col-md-3 col-lg-2">
            <img src="/default-thumbnail.png"
                 style={{maxHeight: '100%'}}
                 className="img-thumbnail"
                 alt="File thumbnail"/>
          </aside>
          <article className="col col-md-9 col-lg-10 text-center align-self-end align-items-end">
            <p className="mb-0 text-right font-weight-light">Size: <span className="font-weight-normal">{(size / (1024*1024)).toFixed(2)}MB</span></p>
            <h4 className="mb-1 text-left text-truncate">{name}</h4>
            <p style={{height: '30px'}} className="text-left text-truncate font-weight-light">Auto generated description for {name}...</p>
            <button className="btn btn-outline-secondary btn-sm" style={{width: '80px'}}>
              <i className="fa fa-arrow-down m-auto" aria-hidden="true"/>
            </button>
          </article>
        </section>
        <button type="button"
                style={{bottom: '12px', right: '20px'}}
                className="btn btn-outline-danger position-absolute"
                onClick={onRemove}>
          <i className="fa fa-trash-o" aria-hidden="true"/>
        </button>
      </li>
    )
  }
}

AttachedFile.propTypes = {
  file: PropTypes.instanceOf(File),
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default AttachedFile;