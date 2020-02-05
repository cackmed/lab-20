import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ value, name }) => (
  <>
    <option value={value}>{name}</option>
  </>
);

Character.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
