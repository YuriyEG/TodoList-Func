import React, { useState } from 'react';

import formatSeconds from '../../modules/formatSeconds';

const Timer = (itemId) => {
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
    setCount((state) => state.count + 1);
  };

  const loadTimeToId = () => {
    localStorage.setItem(JSON.stringify(itemId), JSON.stringify(count));
  };
  const toggleTimer = () => {
    loadTimeToId();
    if (!pause) {
      setPause((state) => !state.pause);
      const id = setInterval(tick, 1000);
      setTimerId(id);
    } else {
      setPause((state) => !state.pause);
      clearInterval(timerId);
    }
  };

  return (
    <div className="timer">
      <div className={buttonClass} id="timer-button" onClick={toggleTimer}></div>
      <span className="timer_info">{formatSeconds(count)}</span>
    </div>
  );
};

export default Timer;
