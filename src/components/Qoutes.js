import React from 'react';
import Proptypes from 'prop-types';
import Quote from './Qoute'; 

const Quotes = ({ quotes }) => {
  const qouteElements = quotes.map(quote => (
    <li key={quote.text}>
      <Quote {...quote} />
    </li>
  ));
  return (
    <ul>
      {qouteElements}
    </ul>
  );
};

Quotes.proptypes = {
  quotes: Proptypes.arrayOf(Proptypes.shape({
    text: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired
  })).isRequired
};

export default Quotes;
