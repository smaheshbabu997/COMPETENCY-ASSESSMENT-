

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Logic to handle timer updates
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Function to start/stop the timer
  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Function to update countdown time
  const updateTimer = (newTime) => {
    setTime(newTime);
  };

  return (
    <div>
      <p>Current Countdown Time: {time} seconds</p>
      <button onClick={toggleTimer}>{isRunning ? 'Stop Timer' : 'Start Timer'}</button>
      <input type="number" value={time} onChange={(e) => updateTimer(e.target.value)} />
    </div>
  );
};

export default CountdownTimer;
