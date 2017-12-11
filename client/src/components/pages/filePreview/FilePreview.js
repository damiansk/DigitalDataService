import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

import ModelPreview from '../ModelPreview/ModelPreview';

class FilePreview extends Component {
  
  static propTypes = {
    file: PropTypes.instanceOf(File).isRequired,
    onSaveThumbnail: PropTypes.func.isRequired
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      backgroundColor: '#000000',
      meshColor: '#eaeaea'
    };
    
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeMeshColor = this.changeMeshColor.bind(this);
  }
  
  changeBackgroundColor(color) {
    this.setState({ backgroundColor: color.hex });
  }
  
  changeMeshColor(color) {
    this.setState({ meshColor: color.hex });
  }
  
  render() {
    
    return (
      <div className="container mb-4">
        <article className="row">
          <div className="col-md-3 text-center">
            <h4>Background color</h4>
            <SketchPicker className="m-auto" color={this.state.backgroundColor}
                          disableAlpha={false} onChange={this.changeBackgroundColor}/>
          </div>
          <div className="col-md-3 text-center">
            <h4>Mesh color</h4>
            <SketchPicker className="m-auto" color={this.state.meshColor}
                          disableAlpha={false} onChange={this.changeMeshColor}/>
          </div>
          <main className="col">
            <ModelPreview backgroundColor={this.state.backgroundColor}
                          meshColor={this.state.meshColor}
                          {...this.props}/>
          </main>
        </article>
      </div>
    );
  }
}

export default FilePreview;