import React from 'react';
import PropTypes from 'prop-types';

const SecondaryHeading = ({title, className}) => (
  <header className={`mb-4 ${className || ''}`}>
    <h3 className='font-weight-light mt-2'>{title}</h3>
    <hr className="my-1"/>
  </header>
);

SecondaryHeading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default SecondaryHeading;