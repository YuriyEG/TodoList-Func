/* eslint-disable */

import React, { useState } from 'react';
import format from 'date-fns/format';

import './Timer.css';

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

  const timeString = `${Number(format(count * 1000, 'hh')) - 3}:${format(count * 1000, 'mm:ss')}`;

  return (
    <div className="timer">
      <div className={buttonClass} id="button" onClick={toggleTimer}></div>
      <span className="timer_info">{timeString}</span>
    </div>
  );
};

export default Timer;
