import React, { useContext } from "react";
import CounterContext from "./CounterContext";

   const Child = () => {
   let count = useContext(CounterContext);
   // console.log("count", count);

   let updateCount = count[1];

   return (
          <div>
             <h1>child component managing state with ContextApi</h1>
             <h4>The counter count is : {count[0]}</h4>

               <button onClick={() => {
                updateCount(++count[0])
               }}>Incremnet</button>
          </div>
        );
   }

export default Child;
