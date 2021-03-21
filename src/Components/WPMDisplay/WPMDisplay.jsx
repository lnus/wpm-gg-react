import React, { useState, useContext, useEffect } from 'react';
import './WPMDisplay.css';
import { GameStateContext } from '../TypeTest/GameStateContext';

const WPMDisplay = () => {
  const { completedWords, timeElapsed, maxTimer } = useContext(
    GameStateContext
  );

  const [currentWPM, setCurrentWPM] = useState(0);
  const [currentAccuracy, setCurrentAccuracy] = useState(0);

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
    <div>
      <div className="wpm-status-display">
        <div className="wpm-status-display__wpm">
          <p>wpm: {currentWPM}</p>
        </div>
        <div className="wpm-status-display__accuracy">
          <p>accuracy {(currentAccuracy * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default WPMDisplay;
