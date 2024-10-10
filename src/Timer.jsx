import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [state, setState] = useState("");
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds >= 59) {
          clearInterval(intervalId); 
          setState("타임 아웃")
          return 60;
        }
        return prevSeconds + 1;
      });
    }, 1000); // 1초마다 호출

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {

  }, [state])

  return (
    <div>
      <h1>타이머</h1>
      <p>{seconds} 초</p>
      <h1>{state}</h1>
    </div>
  );
};

export default Timer;
