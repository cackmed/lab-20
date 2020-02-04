import React, { Component } from 'react';
import Qoutes from '../components/Qoute';
import {  getQoutes } from '../services/futuramaApi';

export default class FuturamaQoutes extends Component {
    state = {
      qoute: []
    }
    componentDidMount() {
      this.fetch();
    }
    fetch = () => {
      return getQoutes()
        .then(qoutes => this.setState({ qoutes }));
    }
    render() {
      const { qoutes } = this.state;
      return (
        <Qoutes qoutes={qoutes}/>
      );
    }
}
