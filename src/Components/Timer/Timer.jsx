import React, { useRef, useContext, useEffect } from 'react';
import { GameStateContext } from '../GameState/GameStateContext';
import './Timer.css';

const Timer = () => {
  const {
    timeElapsed,
    setTimeElapsed,
    maxTimer,
    timerSignalStart,
    currentWPM,
    setFinalWPM,
    currentAccuracy,
    setFinalAccuracy,
    setShowEndScreen,
  } = useContext(GameStateContext);

  const startCountDown = async () => {
    // Function for a timer uwu
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
    // Starts the timer on timerSignalStart - update
    // Only if it's set to true
    if (timerSignalStart) {
      startCountDownRef.current();
    }
  }, [timerSignalStart, startCountDownRef]);

  useEffect(() => {
    // When the timer ends
    if (timeElapsed >= maxTimer) {
      setFinalAccuracy(currentAccuracy);
      setFinalWPM(currentWPM);
      setShowEndScreen(true);
    }
  }, [
    timeElapsed,
    maxTimer,
    setFinalAccuracy,
    setFinalWPM,
    setShowEndScreen,
    currentWPM,
    currentAccuracy,
  ]);

  return (
    // TODO: Write a displayAsMinutes function
    <div className="timer-info-wrapper">
      <div className="timer-text">{maxTimer - timeElapsed}</div>
    </div>
  );
};

export default Timer;
