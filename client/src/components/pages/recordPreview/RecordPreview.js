import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

import { fetchFile, fetchPublicFile, removeFiles } from '../../../actions/file';
import SecondaryHeading from '../heading/SecondaryHeading';
import FileDetails from '../fileDetails/FileDetails';

class RecordPreview extends Component {
  
  constructor(props) {
    super(props);
    
    this.firstTitle = 'General information';
    this.secondTitle = 'Attached files';
  }
  
  componentWillUnmount() {
    this.props.removeFiles();
  }
  
  mapFilesToList() {
    const fetchMethod = this.props.isPublic ? this.props.fetchPublicFile
                                            : this.props.fetchFile;
    return this.props
      .files.map((file, index) =>
        <li className="list-group-item position-relative mb-3" key={index}>
          <FileDetails disabled={this.props.disabled}
                       fetchFile={() => fetchMethod(this.props['_id'], file['_id'])}
                       file={this.props.fetchedFiles[file['_id']]}
                       fileDetails={file}/>
        </li>
      );
  }
  
  render() {
    const {
      declarant,
      date,
      title,
      resourceType,
      keywords,
      destination,
      description,
      files
    } = this.props;
    
    return (
      <article>
        <SecondaryHeading title={this.firstTitle} />
        <section className="row">
          <div className="col-6">
            <div className="row">
              <h5 className="col col-md-5">Declarant</h5>
              <p className="col-md-7">{`${declarant.firstName} ${declarant.lastName}`}</p>
            </div>
            <div className="row">
              <h5 className="col col-md-5">Date</h5>
              <p className="col-md-7">{dateFormat(date, 'dddd, mmmm dS, yyyy')}</p>
            </div>
            <div className="row">
              <h5 className="col col-md-5">Title</h5>
              <p className="col-md-7">{title}</p>
            </div>
            <div className="row">
              <h5 className="col col-md-5">Resource type</h5>
              <p className="col-md-7">{resourceType}</p>
            </div>
            <div className="row">
              <h5 className="col col-md-5">Keywords</h5>
              <p className="col-md-7">{keywords}</p>
            </div>
            <div className="row">
              <h5 className="col col-md-5">Destination group</h5>
              <p className="col-md-7">{destination}</p>
            </div>
          </div>
          <div className="col-6">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </section>
        <SecondaryHeading title={this.secondTitle} />
        <section>
          { files ?
            <ul className="list-group">{this.mapFilesToList()}</ul>
            :
            <div className="row justify-content-center">
              <p className="font-weight-light">No attached files</p>
            </div>
          }
        </section>
      </article>
    );
  }
}

RecordPreview.propTypes = {
  declarant: PropTypes.object.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(Date)
  ]),
  title: PropTypes.string.isRequired,
  resourceType: PropTypes.string.isRequired,
  keywords: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  destination: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  files: PropTypes.array
};

export default connect(
  ({files}) => ({fetchedFiles: files.fetchedFiles}),
  {fetchFile, fetchPublicFile, removeFiles}
)(RecordPreview);
