import React, { useState, useRef, useContext, useEffect } from 'react';
import { GameStateContext } from '../TypeTest/GameStateContext';
import './Timer.css';

const Timer = () => {
  const {
    timeElapsed,
    setTimeElapsed,
    maxTimer,
    timerSignalStart,
  } = useContext(GameStateContext);

  const startCountDown = async () => {
    if (timerSignalStart) {
      for (let i = maxTimer - 1; i >= 0; i--) {
        await new Promise((r) => setTimeout(r, 1000));
        setTimeElapsed(maxTimer - i);
      }
    }
  };

  const startCountDownRef = useRef();
  startCountDownRef.current = startCountDown;

  useEffect(() => {
    if (timerSignalStart) {
      startCountDownRef.current();
    }
  }, [timerSignalStart, startCountDownRef]);

  useEffect(() => {
    if (timeElapsed > maxTimer) {
      console.log(alert('timer over hehe'));
    }
  }, [timeElapsed, maxTimer]);

  return (
    <div className="timer-info-wrapper">
      <div className="timer-text">{maxTimer - timeElapsed}</div>
    </div>
  );
};

export default Timer;
