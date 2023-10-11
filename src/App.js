import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './User';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "Anil"
    }
  }
  apple() {
    this.setState({ data: "Kapoor" })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Click Me</button>
      </div>
    );
  }
}

export default App;
