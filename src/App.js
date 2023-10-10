import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
  const [data, setdata] = useState('Anil');
  function updateData() {
    setdata("Nick");
  }
  console.log('-------------------------------------');
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default App;
