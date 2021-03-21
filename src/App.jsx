import './App.css';

import React from 'react';
import TypeTest from './Components/TypeTest/TypeTest';
import WPMDisplay from './Components/WPMDisplay/WPMDisplay';
import Timer from './Components/Timer/Timer';
import { GameStateProvider } from './Components/GameState/GameStateContext';
import Endscreen from './Components/Endscreen/Endscreen';

const App = () => {
  return (
    <GameStateProvider>
      <div className="timer-wrapper">
        <Timer />
      </div>
      <div className="typing-game-wrapper">
        <TypeTest />
      </div>
      <div className="info-wrapper">
        <WPMDisplay />
      </div>
      <div className="end-screen-wrapper">
        <Endscreen />
      </div>
    </GameStateProvider>
  );
};

export default App;
