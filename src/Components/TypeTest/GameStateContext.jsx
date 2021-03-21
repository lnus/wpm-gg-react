import React, { useState, createContext } from 'react';
import randomWords from 'random-words';

export const GameStateContext = createContext();

export const GameStateProvider = (props) => {
  // Word states
  const [targetWords, setTargetWords] = useState(
    randomWords({ exactly: 10, maxLength: 7 })
  );
  const [completedWords, setCompletedWords] = useState([]);
  const [currentTarget, setCurrentTarget] = useState(targetWords[0]);
  const [currentUserInput, setCurrentUserInput] = useState('');
  const [currentWordCorrect, setCurrentWordCorrect] = useState(true);

  // Timer states
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [maxTimer, setMaxTimer] = useState(60);
  const [timerSignalStart, setTimerSignalStart] = useState(false);

  return (
    <GameStateContext.Provider
      value={{
        targetWords: targetWords,
        setTargetWords: setTargetWords,
        completedWords: completedWords,
        setCompletedWords: setCompletedWords,
        currentTarget: currentTarget,
        setCurrentTarget: setCurrentTarget,
        currentUserInput: currentUserInput,
        setCurrentUserInput: setCurrentUserInput,
        currentWordCorrect: currentWordCorrect,
        setCurrentWordCorrect: setCurrentWordCorrect,
        timeElapsed: timeElapsed,
        setTimeElapsed: setTimeElapsed,
        maxTimer: maxTimer,
        setMaxTimer: setMaxTimer,
        timerSignalStart: timerSignalStart,
        setTimerSignalStart: setTimerSignalStart,
      }}
    >
      {props.children}
    </GameStateContext.Provider>
  );
};
