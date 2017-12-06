import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

import ModelPreview from '../ModelPreview/ModelPreview';

class FilePreview extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      backgroundColor: '#000000'
    };
    
    this.handleChangeColorComplete = this.handleChangeColorComplete.bind(this);
  }
  
  handleChangeColorComplete(color) {
    this.setState({ backgroundColor: color.hex });
  }
  
  render() {
    
    return (
      <div className="container mb-4">
        <article className="row">
          <aside className="col-md-6 text-center">
            <h4>Background color</h4>
            <div className="m-auto">
              <SketchPicker color={this.state.backgroundColor}
                            disableAlpha={false}
                            onChange={this.handleChangeColorComplete}/>
            </div>
          </aside>
          <main className="col">
            <ModelPreview backgroundColor={this.state.backgroundColor}
                          {...this.props}/>
          </main>
        </article>
      </div>
    );
  }
}

FilePreview.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  onSaveThumbnail: PropTypes.func
};

export default FilePreview;