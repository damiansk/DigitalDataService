import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import SecondaryHeading from '../../../../../components/pages/heading/SecondaryHeading';
import AttachedFile from './attachedFile/AttachedFile';

class AttachedFilesForm extends Component {
  
  constructor(props) {
    super(props);
    
    this.firstTitle = "Attach files";
    this.secondTitle = "Attached files";
  }
  
  renderAttachedFiles() {
    const { fields } = this.props;
    return fields.map((name, index) =>
        <AttachedFile key={index}
                      name={name}
                      onRemove={() => fields.remove(index)}
                      file={fields.get(index).file}/>
      );
  }
  
  render() {
    const {props: {fields}, firstTitle, secondTitle} = this;
  
    return (
      <div>
        <SecondaryHeading title={firstTitle}/>
  
        <div className="row justify-content-center">
          <Dropzone style={{border: '2px dashed', height: '150px', minHeight: '150px'}}
                    className="form-control col-11 col-lg-10 col-xl-8"
                    activeClassName="bg-light border-success"
                    multiple={false}
                    onDrop={(file, e) => fields.push({file: file[0]})}>
            <p className="text-center mt-4">
              Drop file here, or click to upload.<br/>
             <span className="btn btn-secondary mt-3">Click here</span>
            </p>
          </Dropzone>
        </div>
        <SecondaryHeading title={secondTitle}/>
        {this.renderAttachedFiles()}
      </div>
    );
  }
}

export default AttachedFilesForm;
