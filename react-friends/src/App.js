import React, { Component } from 'react';
import './App.css';
import {people} from './people';
import {PeopleList} from './peopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    this.setState({ people: people });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>People List: </h1>
          <PeopleList name={'name'} email={"email"} Container={'Container'} peopleProp={this.state.people} />
        </header>
      </div>
    );
  }
}

export default App;
