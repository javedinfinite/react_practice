import {React, useState, useEffect } from "react";

var c = 0
 
export default function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [paused, setPaused] = useState(false);


  const stopWatch = (e) =>{
    setPaused(!paused)
    console.log("stop called...")
  }

  const resetWatch = (e) =>{
    setMs(0)
    setSec(0)
    setMin(0)
    setPaused(true)

  }
  useEffect(() => {
    // console.log('useefect called', ++c)
    const interval = setInterval(() => {
      // console.log('I am setimer')
        if(!paused)
            timer()
        else
          clearInterval(interval);
    }, 10);

    return () => {
      // console.log('I am cleartimer',++c)
      clearInterval(interval);
    };
  });

function timer() {

    setMs(ms+1)
    if(ms >= 100){setSec(sec+1); setMs(0)}
    if(sec === 60){setMin(min+1); setSec(0)}
    if(min === 60){setMs(0); setSec(0); setMin(0)}
  } 
   
    return (
    <div>
      <h1>Stopwatch</h1>
      <div>
          <span>{min < 10 ? `0` + min : min}</span> :  
          <span>{sec < 10 ? `0`+ sec : sec}</span> : 
          <span>{ms < 10 ? `0`+ ms : ms}</span>
      </div>
      <button onClick={stopWatch}>Pause/Resume</button>
      <button onClick={resetWatch}>Reset</button>
    </div>
  )
  

}
