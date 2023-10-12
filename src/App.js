import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anil"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Props in React </h1>
        <Student name={this.state.name} email="anil123@gmail.com" />
        <button onClick={() => this.setState({ name: "Sidhu" })}>click Me</button>
      </div>
    );
  }
}


export default App;
