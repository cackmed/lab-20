export const getQuotes = () => fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.json())
  .then(quotes => quotes.map(({ quote, character, image }) => ({
    text: quote,
    name: character,
    image
  })));

export const getCharacterQuotes = (characterName) => fetch(`http://futuramaapi.herokuapp.com/api/characters/${characterName}/1`)
  .then(res => res.json())
  .then(quotes => quotes.map(({ quote, character, image }) => ({
    text: quote,
    name: character,
    image
  })));


