import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {
        print ?
          <h1>{data}</h1>
          : null
      }
      <input type="text" onChange={getdata}></input>
      <button onClick={() => setPrint(true)}>Print Value</button>
    </div>
  )
}


export default App;
