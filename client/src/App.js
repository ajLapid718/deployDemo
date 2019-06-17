import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.get("/students")
      .then(res => res.data)
      .then(students => console.log(students))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello world, check the console for students upon mount
        </header>
      </div>
    );
  }
}

export default App;
