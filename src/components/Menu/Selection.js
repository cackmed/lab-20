import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';


const Selection = ({ options }) => {

  const optionElements = options.map(({ value, name }) => ( 
    <Option key={value} value={value} name={name}/>
  ));
  return (
    <>
      {optionElements}
    </>
  );
};

Selection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

export default Selection;

