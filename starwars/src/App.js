import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      next: '',
      previous: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('DATA:', data);
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous,

        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />

        <button disabled={!this.state.previous} onClick={()=> {
          this.getCharacters(this.state.previous);
        }}>Previous
        </button>

        <button disabled={!this.state.next} onClick={()=> {
          this.getCharacters(this.state.next);
        }}>Next
        </button>

      </div>
    );
  }
}

export default App;
