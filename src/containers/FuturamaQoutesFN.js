import React, { useState, useEffect } from 'react';
import Quotes from '../components/Quotes';
import Button from '../components/Button';
import CharcterMenu from '../components/CharacterMenu';
import NumberOfQuotesMenu from '../components/QuoteMenu';
import useQuotes from '../hooks/quotes';


const FuturamaQoutesFn = () => {
  const { quote, changeNumber, changeCharacter, handleClick, handleCharacterClick } = useQuotes();

  return (
    <>
      <Quotes quotes={quote}/>
      <Button text='get a random quote!' onClick={handleClick}/>
      <NumberOfQuotesMenu onChange={({ target }) => changeNumber(target.value)}/>
      <CharcterMenu onChange={({ target }) => changeCharacter(target.value)} onClick={handleCharacterClick} />
      
    </>
  );
};

export default FuturamaQoutesFn;
