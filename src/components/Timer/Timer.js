/* eslint-disable */

import React, { useState } from 'react';

import './Timer.css';
import formatSeconds from '../../modules/formatSeconds';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(false);
  const [pause, setPause] = useState(false);

  let buttonClass = 'timer_button';
  if (!pause) {
    buttonClass += ' timer_button-play';
  } else {
    buttonClass += ' timer_button-pause';
  }
  const tick = () => {
    setCount((count) => count + 1);
  };
  const toggleTimer = () => {
    if (!pause) {
      setPause((pause) => !pause);
      const id = setInterval(tick, 1000);
      setTimerId(id);
    } else {
      setPause((pause) => !pause);
      clearInterval(timerId);
    }
  };

  return (
    <div className="timer">
      <div className={buttonClass} id="button" onClick={toggleTimer}></div>
      <span className="timer_info">{formatSeconds(count)}</span>
    </div>
  );
};

export default Timer;
