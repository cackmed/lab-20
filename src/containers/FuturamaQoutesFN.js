import React, { useState, useEffect } from 'react';
import Quotes from '../components/Quotes';
import Button from '../components/Button';
import CharcterMenu from '../components/CharacterMenu';
import { getQuotes, getCharacterQuotes } from '../services/futuramaApi';



const FuturamaQoutesFn = () => {
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState('');

//   useEffect(() => {
//     getQuotes();
//   });
  const changeCharacter = ({ target }) => {
    const newCharacter = target.value;
    setCharacter(newCharacter);
  };
  const handleClick = () => {
    getQuotes()
      .then(quotes => setQuote(quotes));
  };
  const handleCharacterClick = () => {
    getCharacterQuotes(character)
      .then(quotes => setQuote(quotes));
  };

  return (
    <>
      <Quotes quotes={quote}/>
      <Button text='get a random quote!' onClick={handleClick}/>
      <CharcterMenu onChange={changeCharacter} onClick={handleCharacterClick} />
    </>
  );
};

export default FuturamaQoutesFn;
