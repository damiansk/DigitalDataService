import React, { Component } from 'react';
import { ChromePicker, SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

import ModelPreview from '../ModelPreview/ModelPreview';

const popover = {
  position: 'absolute',
  zIndex: '2',
};
const cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

class FilePreview extends Component {
  
  static propTypes = {
    file: PropTypes.instanceOf(File).isRequired,
    onSaveThumbnail: PropTypes.func.isRequired
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      backgroundColorPicker: false,
      meshColorPicker: false,
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
          <div className="col-md-3 offset-md-1 offset-lg-2 text-center">
            <h4>Colors</h4>
            <div className="row">
              <button className="btn btn-outline-warning btn-block"
                      type="button"
                      onClick={() => this.setState({backgroundColorPicker: !this.state.backgroundColorPicker})}>
                Change background
              </button>
              { this.state.backgroundColorPicker ?
                <div style={popover}>
                  <div style={cover} onClick={() => this.setState({ backgroundColorPicker: false })}/>
                  <ChromePicker disableAlpha={true}
                                color={this.state.backgroundColor}
                                onChange={this.changeBackgroundColor}/>
                </div>
                : null }
            </div>
            <div className="row mt-2">
              <button className="btn btn-outline-warning btn-block"
                      type="button"
                      onClick={() => this.setState({meshColorPicker: !this.state.meshColorPicker})}>
                Change mesh
              </button>
              { this.state.meshColorPicker ?
                <div style={popover}>
                  <div style={cover} onClick={() => this.setState({ meshColorPicker: false })}/>
                  <ChromePicker disableAlpha={true}
                                color={this.state.meshColor}
                                onChange={this.changeMeshColor}/>
                </div>
                : null }
            </div>
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