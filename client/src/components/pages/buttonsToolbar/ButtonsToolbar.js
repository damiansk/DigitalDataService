import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonsToolbar extends Component {
  
  render() {
    const { style, className, children } = this.props;
    
    return (
      <div className={`btn-toolbar ${className}`}
           style={style}
           role="toolbar"
           aria-label="Toolbar with button groups">
        {children}
      </div>
    )
  }
}

ButtonsToolbar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

export default ButtonsToolbar;