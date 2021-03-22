import React, { useRef, useContext, useEffect } from 'react';
import { GameStateContext } from '../GameState/GameStateContext';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
// import './Timer.css';

const formatSeconds = (time) => {
  // stole this from the online lol
  // https://code.labstack.com/HVdZZYqH

  // ingoring hours here. probably won't happen
  const mins = ~~((time % 3600) / 60);
  const secs = ~~time % 60;

  let output = '';
  output += '' + mins + ':' + (secs < 10 ? '0' : '');
  output += '' + secs;

  return output;
};

const Timer = () => {
  const {
    timeElapsed,
    setTimeElapsed,
    maxTimer,
    setMaxTimer,
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
    <Grid container justify="center" alignItems="center">
      <IconButton
        onClick={() => {
          // Removes 15 seconds from the maxTimer
          if (maxTimer >= 16) setMaxTimer(maxTimer - 15);
        }}
      >
        <Remove />
      </IconButton>
      <Typography variant="h2" color="primary">
        {formatSeconds(maxTimer - timeElapsed)}
      </Typography>
      <IconButton
        onClick={() => {
          // Adds 15 seconds to the maxTimer
          setMaxTimer(maxTimer + 15);
        }}
      >
        <Add />
      </IconButton>
    </Grid>
  );
};

export default Timer;
