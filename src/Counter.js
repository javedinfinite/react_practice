import {React, useState, useEffect } from "react";
// import "./styles.css";


export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [paused, setPaused] = useState(false);

const stopCount = (e) =>{
  setPaused(!paused)
  console.log("stop called...")
}

  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused)
        setCounter(counter + 1);
      else
        clearInterval(interval);        
    }, 1000);
    

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={(e)=>stopCount()}>Stop/start...</button>
    </div>
  )
  
  {/* <h1>{counter}</h1>; */}
}
