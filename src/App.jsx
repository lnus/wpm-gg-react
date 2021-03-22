import './App.css';

import React, { useState } from 'react';
import Endscreen from './Components/Endscreen/Endscreen';
import { GameStateProvider } from './Components/GameState/GameStateContext';
import MenuBar from './Components/MenuBar/MenuBar';
import Timer from './Components/Timer/Timer';
import TypeTest from './Components/TypeTest/TypeTest';
import WPMDisplay from './Components/WPMDisplay/WPMDisplay';
import LightTheme from './Themes/light';
import DarkTheme from './Themes/dark';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    overflow: 'hidden',
  },
}));

const App = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <MenuBar />
        <GameStateProvider>
          <Timer />
          <TypeTest />
          <WPMDisplay />
          <Endscreen />
        </GameStateProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
