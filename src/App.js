import React,{ useState } from 'react';
import './App.css';
import Parent from "./Parent";

import CounterContext from './CounterContext';


function App() {
  // let [count,setCount] = useState(20)
  let count = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
