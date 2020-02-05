import React, { useState, useEffect } from 'react';
import Quotes from '../components/Quotes';
import Button from '../components/Button';
import CharcterMenu from '../components/CharacterMenu';
import NumberOfQuotesMenu from '../components/QuoteMenu';
import { getQuotes, getCharacterQuotes } from '../services/futuramaApi';



const FuturamaQoutesFn = () => {
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState('');
  const [numQuotes, setNumQuotes] = useState('1');

  useEffect(() => {
    getQuotes()
      .then(quotes => setQuote(quotes));
  },
  []);
  const changeNumber = ({ target }) => {
    const newNumber = target.value;
    setNumQuotes(newNumber);
  };
  const changeCharacter = ({ target }) => {
    const newCharacter = target.value;
    setCharacter(newCharacter);
  };
  const handleClick = () => {
    getQuotes()
      .then(quotes => setQuote(quotes));
  };
  const handleCharacterClick = () => {
    getCharacterQuotes(character, numQuotes)
      .then(quotes => setQuote(quotes));
  };

  return (
    <>
      <Quotes quotes={quote}/>
      <Button text='get a random quote!' onClick={handleClick}/>
      <NumberOfQuotesMenu onChange={changeNumber}/>
      <CharcterMenu onChange={changeCharacter} onClick={handleCharacterClick} />
      
    </>
  );
};

export default FuturamaQoutesFn;
