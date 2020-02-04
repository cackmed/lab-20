export const getQuotes = () => fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.json())
  .then(qoutes => qoutes.map(({ quote, character, image }) => ({
    text: quote,
    name: character,
    image
  })));

