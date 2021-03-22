import React, { useContext } from 'react';
import { GameStateContext } from '../GameState/GameStateContext';
// import './Endscreen.css';

const Endscreen = () => {
  const {
    showEndScreen,
    setShowEndScreen,
    finalWPM,
    finalAccuracy,
    setCurrentAccuracy,
    setCurrentWPM,
    setCompletedWords,
    setTimeElapsed,
    setResetGame,
    setTimerSignalStart,
  } = useContext(GameStateContext);

  const resetGame = () => {
    setCurrentAccuracy(0);
    setCurrentWPM(0);
    setCompletedWords([]);
    setTimeElapsed(0);
    setTimerSignalStart(false);
    setResetGame(true);
  };

  return (
    <div
      className="end-screen"
      style={showEndScreen ? { display: 'inherit' } : { display: 'none' }}
    >
      <div className="end-screen__inner">
        <div className="end-screen__inner-content">
          <div className="end-screen__inner-content-header">Final stats:</div>
          <div className="end-screen__inner-content-wpm">
            WPM: {finalWPM ? finalWPM.toFixed(2) : 0}
          </div>
          <div className="end-screen__inner-content-accuracy">
            Accuracy: {(finalAccuracy * 100).toFixed(2)}%
          </div>

          <div className="end-screen__menu">
            <button
              className="end-screen__menu-button"
              onClick={(e) => {
                resetGame();
                setShowEndScreen(false);
              }}
            >
              Close
            </button>
            <button
              className="end-screen__menu-button end-screen__menu-button--green"
              onClick={(e) => {
                alert('not implemented :(');
              }}
            >
              Share!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endscreen;
