import React, { Component } from 'react';
import Quotes from '../components/Quotes';
import Button from '../components/Button';
import {  getQuotes } from '../services/futuramaApi';


export default class FuturamaQoutes extends Component {
    state = {
      quotes: []
    }
    componentDidMount() {
      this.fetch();
    }
    fetch = () => {
      return getQuotes()
        .then(quotes => this.setState({ quotes }));
    }
    render() {
      const { quotes } = this.state;
      return (
        <>
          <Quotes quotes={quotes}/>
          <Button  text="Grab a new Quote" onClick={this.fetch}/>
        </>

      );
    }
}
