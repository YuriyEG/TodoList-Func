/* eslint-disable */

import React, { useState } from 'react';
import formatSeconds from '../../modules/formatSeconds';

const Timer = (itemId) => {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(false);
  const [full, setFull] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const [pause, setPause] = useState(false);
  const [timerInfo, setTimerInfo] = useState('');
  const [start, setStart] = useState(0);

  let buttonClass = 'timer_button';
  if (!pause) {
    buttonClass += ' timer_button-play';
  } else {
    buttonClass += ' timer_button-pause';
  }

  const tick = () => {
    setCount((count) => count + 1);
  };




  const toggleTimer = (e) => {
    e.stopPropagation();
    console.log(e.target.id);
        loadTimeToId();
    if (!pause) {
      setPause((pause) => !pause);
      const id = setInterval(tick, 1000);
      setTimerId(id);
    
 
    } else {
      setPause((pause) => !pause);
      clearInterval(timerId);
      
    }
  };

  const loadTimeToId = () => {
      localStorage.setItem(JSON.stringify(itemId),JSON.stringify(count));
  }

  return (
    <div className="timer" >
      <div className={buttonClass} id="timer-button" onClick={toggleTimer}></div>
      <span className="timer_info">{formatSeconds(count)}</span>
    </div>
  );
};

export default Timer;
