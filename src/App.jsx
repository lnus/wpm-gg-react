// import './App.css';

import React from 'react';
import Endscreen from './Components/Endscreen/Endscreen';
import { GameStateProvider } from './Components/GameState/GameStateContext';
import Timer from './Components/Timer/Timer';
import TypeTest from './Components/TypeTest/TypeTest';
import WPMDisplay from './Components/WPMDisplay/WPMDisplay';

const App = () => {
  return (
    <GameStateProvider>
      <Timer />
      <TypeTest />
      <WPMDisplay />
      <Endscreen />
    </GameStateProvider>
  );
};

export default App;
