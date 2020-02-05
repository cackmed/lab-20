import React from 'react';
import PropTypes from 'prop-types';
import Characters from './Character/Characters';

const characters = [
  { value: 'bender', name: 'Bender' },
  { value: 'fry', name: 'Fry' },
  { value: 'leela', name: 'Bender' },
  { value: 'professor-farnsworth', name: 'Professor Farnsworth' },
  { value: 'amy', name: 'Amy' },
  { value: 'zapp-brannigan', name: 'Zapp-Brannigan' },
  { value: 'lurr', name: 'Lurr' },
  { value: 'dr-zoidberg', name: 'Dr Zoidberg' },
  { value: 'bob-barker', name: 'Bob Barker' },
  { value: 'hermes', name: 'Hermes' },
  { value: 'morgan-proctor', name: 'Morgan Proctor' },
  { value: 'mom', name: 'Mom' },
  { value: 'robot-mob', name: 'Robot-Mob' },
  { value: 'giant-bender', name: 'Giant Bender' },
  { value: 'kif', name: 'Kif' }
];


const CharacterMenu = ({ onChange, onClick }) => (
  <>
    <select onChange={onChange}>
      <Characters characters={characters}/>
    </select>
    <button onClick={onClick}>Get Qoute</button>
  </>
);

CharacterMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CharacterMenu;

