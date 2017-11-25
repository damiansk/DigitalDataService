import React, { Component } from 'react';
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone';

import SecondaryHeading from '../../../../components/pages/heading/SecondaryHeading';
import CustomTextField from '../../../../components/pages/customTextField/CustomTextField';

class AttachedFileForm extends Component {
  
  constructor(props) {
    super(props);
    
    this.firstTitle = "Attach files";
    this.secondTitle = "Attached files";
  }
  
  render() {
    const {fields, meta: {error, touched}} = this.props;
    
    return (
      <div>
        <SecondaryHeading title={this.firstTitle}/>
  
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
          {touched && error && <span className="error">{error}</span>}
        </div>
        <SecondaryHeading title={this.secondTitle}/>
        {fields.map((member, index) =>
          <div key={index}>
            <Field name={`${member}.title`}
                   label="title"
                   type="text" component={CustomTextField}/>
          </div>
        )}
      </div>
    );
  }
}

export default AttachedFileForm;
