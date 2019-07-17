import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(100);

  return (
    <div className="App">
      <div className="counter">{counter}</div>

      <div className="bar" style={{ width: counter }} />
      <div className="wrapper">
        <button className="button" onClick={() => setCounter(counter + 100)}>
          +100
        </button>
        <button
          className="button"
          onClick={() => setCounter(counter === 0 ? 0 : counter - 100)}
        >
          -100
        </button>
      </div>
    </div>
  );
}

export default App;
