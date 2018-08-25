import React, { Component } from 'react';
import CharacterList from './CharacterList';
import './App.css';

//initialize the app component
class App extends Component {
  constructor() {
    super();
    this.state = {
      characters:[]
    }
  }

  //bring in data from the HP api
  componentDidMount() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then(response => response.json())
      .then(characters => this.setState(
        {
          characters: characters
        }
      ))
  }

  //render the app component
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Harry Potter Characters</h1>
        <CharacterList characters = {characters} />
      </div>
    );
  }
}

export default App;
