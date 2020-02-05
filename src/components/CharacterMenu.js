import React from 'react';
import PropTypes from 'prop-types';

const CharacterMenu = ({ onChange, onClick }) => (
  <>
    <select value="test" onChange={onChange}>
      <option value="bender">Bender</option>
      <option value="fry">Fry</option>
      <option value="leela">Leela</option>
      <option value="professor-farnsworth">Professor Farnsworth</option>
      <option value="amy">Amy</option>
      <option value="zapp-brannigan">Zapp Brannigan</option>
      <option value="lurr">Lurr</option>
      <option value="dr-zoidberg">Dr Zoidberg</option>
      <option value="bob-barker">Bob Barker</option>
      <option value="hermes">Hermes</option>
      <option value="morgan-proctor">Morgan Proctor</option>
      <option value="mom">Mom</option>
      <option value="robot-mob">Robot Mob</option>
      <option value="giant-bender">Giant Bender</option>
      <option value="kif">Kif</option>
      <option value="don-bot">Don Bot</option>
    </select>
    <button onClick={onClick}>Get Qoute</button>
  </>
);

CharacterMenu.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CharacterMenu;

