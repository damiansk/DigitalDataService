import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({title}) => (
  <header className="mb-5">
    <h1 className="display-3 mt-2">{title}</h1>
    <hr className="my-2"/>
  </header>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired
};

export default Heading;