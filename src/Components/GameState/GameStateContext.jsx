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

  // WPM States
  const [currentWPM, setCurrentWPM] = useState(0);
  const [currentAccuracy, setCurrentAccuracy] = useState(0);
  const [finalWPM, setFinalWPM] = useState(0);
  const [finalAccuracy, setFinalAccuracy] = useState(0);

  // Game-over states
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [resetGame, setResetGame] = useState(false);

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
        showEndScreen: showEndScreen,
        setShowEndScreen: setShowEndScreen,
        currentWPM: currentWPM,
        setCurrentWPM: setCurrentWPM,
        currentAccuracy: currentAccuracy,
        setCurrentAccuracy: setCurrentAccuracy,
        finalWPM: finalWPM,
        setFinalWPM: setFinalWPM,
        finalAccuracy: finalAccuracy,
        setFinalAccuracy: setFinalAccuracy,
        resetGame: resetGame,
        setResetGame: setResetGame,
      }}
    >
      {props.children}
    </GameStateContext.Provider>
  );
};
