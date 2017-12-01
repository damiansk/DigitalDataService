import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TextAreaToLabelField.css';

class TextAreaToLabelField extends Component {
  
  componentDidUpdate() {
    this.area.focus();
  }
  
  render() {
    const {
      input,
      meta: { touched, error },
      disableArea = false,
      className,
      disableHeight
    } = this.props;
    
    return (
      <div className="form-group mb-0 mt-3">
        <div>
      <textarea className={`form-control ${className} ${disableArea && 'disable-textarea p-0 active'}`}
                style={disableArea ? ({maxHeight: disableHeight, lineHeight: disableHeight}) : ({})}
                disabled={disableArea}
                ref={textarea => this.area = textarea}
                {...input}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )
  }
}

TextAreaToLabelField.propTypes = {
  type: PropTypes.string,
  disableArea: PropTypes.bool,
  disableHeight: PropTypes.string
};

export default TextAreaToLabelField;