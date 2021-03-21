import './App.css';

import React from 'react';
import TypeTest from './Components/TypeTest/TypeTest';
import Demo from './Components/Demo';
import WPMDisplay from './Components/WPMDisplay/WPMDisplay';
import Timer from './Components/Timer/Timer';
import { GameStateProvider } from './Components/TypeTest/GameStateContext';

const App = () => {
  return (
    <GameStateProvider>
      <div className="timer-wrapper">
        <Timer />
      </div>
      <div className="game-wrapper">
        <TypeTest />
        {/* <div className="footer">no content uwu</div> */}
      </div>
      <div className="info-wrapper">
        <WPMDisplay />
      </div>
      <Demo />
    </GameStateProvider>
  );
};

export default App;
