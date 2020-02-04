import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ text, name, image }) => (
  <figure>
    <img src={image} alt={name} className={styles.img}/>
    <figcaption>&quot;{text}&quot; --{name}</figcaption> 
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};




export default Quote;
