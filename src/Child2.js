import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer.js';
const Child2 = () => {

  let [state, dispatch] = useReducer(CounterReducer,10);

   return (
      <div>
          <h1> child2 component managing state with Reducer</h1>
          <h3>The value of reducer state is {state}</h3>
          <button onClick={() => {
               dispatch('INCREMENT')
          }}>Increment</button>
          &nbsp;
          &nbsp;
          &nbsp;
          <button onClick={() => {
               dispatch('DECREMENT')
          }}>Decrement</button>
      </div>
   )
}

export default Child2;
