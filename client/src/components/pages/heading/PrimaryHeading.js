import React from 'react';
import PropTypes from 'prop-types';

const PrimaryHeading = ({title, className}) => (
  <header className={`mb-4 ${className || ''}`}>
    <h1 className='display-4 mt-2'>{title}</h1>
    <hr className="my-2"/>
  </header>
);

PrimaryHeading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default PrimaryHeading;