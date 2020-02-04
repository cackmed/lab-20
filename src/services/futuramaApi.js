export const getQoutes = () => fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => res.json())
  .then(qoutes => qoutes.map(({ qoute, character, image }) => ({
    text: qoute,
    name: character,
    image
  })));

