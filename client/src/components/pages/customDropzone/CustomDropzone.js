import React from 'react';

import Dropzone from 'react-dropzone';

const CustomDropzone = ({name, input, meta: {error, touched}}) => (
  <div className="row justify-content-center">
    <Dropzone name={name}
              style={{border: '2px dashed', height: '150px', minHeight: '150px'}}
              className="form-control col-11 col-lg-10 col-xl-8"
              activeClassName="bg-light border-success"
              multiple={false}
              onDrop={(fileToUpload, e) => input.onChange(fileToUpload[0])}>
      <p className="text-center mt-4">
        Drop file here, or click to upload.<br/>
        <span className="btn btn-secondary mt-3">Click here</span>
      </p>
    </Dropzone>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default CustomDropzone;