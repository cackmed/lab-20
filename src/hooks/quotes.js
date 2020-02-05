import { useState, useEffect } from 'react';
import { getQuotes, getCharacterQuotes } from '../services/futuramaApi';

export const useQuotes = () => {
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

  return { quote, changeNumber, changeCharacter, handleClick, handleCharacterClick };
};
