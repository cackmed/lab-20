import React, { Component } from 'react';
import Quotes from '../components/Quotes';
import Button from '../components/Button';
import CharcterMenu from '../components/CharacterMenu';
import {  getQuotes, getCharacterQoutes } from '../services/futuramaApi';


export default class FuturamaQuotes extends Component {
    state = {
      quotes: [],
      character: ''
    }
    changeCharacter = ({ target }) => {
      this.setState({ character: target.value });
    }
    componentDidMount() {
      this.fetch();
    }
    fetch = () => {
      return getQuotes()
        .then(quotes => this.setState({ quotes }));
    }
    fetchCharacterQuote = () => {
      return getCharacterQoutes(this.state.character)
        .then(quotes => this.setState({ quotes }));
    }
    render() {
      const { quotes } = this.state;
      return (
        <>
          <Quotes quotes={quotes}/>
          <Button  text="Grab a new Quote" onClick={this.fetch}/>
          <CharcterMenu onChange={this.changeCharacter} onClick={this.fetchCharacterQuote}/>
        </>

      );
    }
}
