import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


const Characters = ({ characters }) => {

  const characterElements = characters.map(({ value, name }) => ( 
    <Character key={value} value={value} name={name}/>
  ));
  return (
    <>
      {characterElements}
    </>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
};

export default Characters;

