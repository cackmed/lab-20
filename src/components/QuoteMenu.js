import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Menu/Selection';


const NumberOfquotes = [
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
  { value: 4, name: '4' },
  { value: 5, name: '5' },
  { value: 6, name: '6' },
  { value: 7, name: '7' },
  { value: 8, name: '8' },
  { value: 9, name: '9' },
  { value: 10, name: '10' }
];


const NumberOfQuotesMenu = ({ onChange }) => (
  <>
    <select onChange={onChange}>
      <Selection options={NumberOfquotes}/>
    </select>
  </>
);

NumberOfQuotesMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NumberOfQuotesMenu;

