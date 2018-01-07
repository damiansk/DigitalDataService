import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

import SecondaryHeading from '../../../../../components/pages/heading/SecondaryHeading';
import AttachedFile from './attachedFile/AttachedFile';

class AttachedFilesForm extends Component {
  
  constructor(props) {
    super(props);
    
    this.firstTitle = "Attach files";
    this.secondTitle = "Attached files";
    
    this.state = {
      editedFieldIndex: null
    }
  }
  
  renderAttachedFiles() {
    const { fields, files } = this.props;
    return fields.map((name, index) =>
        <AttachedFile key={index}
                      name={name}
                      data={files[index]}
                      activeEditing={this.state.editedFieldIndex === index}
                      onRemove={() => {
                        this.setState({editedFieldIndex: null});
                        fields.remove(index);
                      }}
                      onEdit={() => this.setState({editedFieldIndex: index})}
                      onSave={() => this.setState({editedFieldIndex: null})}
                      file={fields.get(index).file}
                      id={fields.get(index)._id}/>
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
                    onDrop={file =>
                      fields.push({
                        file: file[0],
                        name: file[0].name,
                        description: `Auto generated description for ${file[0].name}...`,
                        thumbnail: ''
                      })}>
            <p className="text-center mt-4">
              Drop file here, or click to upload.<br/>
             <span className="btn btn-primary mt-3">Click here</span>
            </p>
          </Dropzone>
        </div>
        <SecondaryHeading title={secondTitle}/>
        {fields.length > 0 ?
          <ul className="list-group">
            {this.renderAttachedFiles()}
          </ul>
          :
          <div className="row justify-content-center">
            <p className="font-weight-light">No attached files</p>
          </div>
        }
      </div>
    );
  }
}

export default connect(
  ({form}) => ({
    files: form.wizard.values.files
  })
)(AttachedFilesForm);
