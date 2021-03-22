import React, { useContext, useEffect } from 'react';
// import './WPMDisplay.css';
import { GameStateContext } from '../GameState/GameStateContext';

const WPMDisplay = () => {
  const {
    completedWords,
    timeElapsed,
    currentWPM,
    setCurrentWPM,
    currentAccuracy,
    setCurrentAccuracy,
  } = useContext(GameStateContext);

  const calculateWPM = () => {
    let correctWordsArr = completedWords
      .filter((wordData) => {
        if (wordData.correct) return wordData;
        else return null;
      })
      .map((wordData) => {
        return wordData.word;
      });
    let charSplitArr = correctWordsArr.join('').split('');
    let numWords = charSplitArr.length;
    let wordsStandardizedTotal = numWords / 5;
    let wpm = (wordsStandardizedTotal / timeElapsed) * 60;
    setCurrentWPM(wpm);
  };

  const calculateAccuracy = () => {
    let correctWords = completedWords.filter((wordData) => {
      if (wordData.correct) return wordData;
    });

    let accuracy =
      correctWords.length !== 0
        ? correctWords.length / completedWords.length
        : 0;

    setCurrentAccuracy(accuracy);
  };

  useEffect(() => {
    calculateWPM();
    calculateAccuracy();
  }, [timeElapsed]);

  return (
    <div className="wpm-status-wrapper">
      <div className="wpm-status-display">
        <div className="wpm-status-display__header">Live stats:</div>
        <div className="wpm-status-display__wpm">
          WPM: {currentWPM ? currentWPM.toFixed(2) : 0}
        </div>
        <div className="wpm-status-display__accuracy">
          Accuracy {(currentAccuracy * 100).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default WPMDisplay;
