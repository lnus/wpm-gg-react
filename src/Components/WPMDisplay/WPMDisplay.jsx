import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { Keyboard, Score } from '@material-ui/icons';
import React, { useContext, useEffect } from 'react';
import { GameStateContext } from '../GameState/GameStateContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
    backgroundColor: theme.palette.primary.main,
  },
  obj: {
    color: theme.palette.text.primary,
  },
}));

const WPMDisplay = () => {
  const classes = useStyles();

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
    <Grid container justify="center" alignItems="center" direction="column">
      <Paper className={classes.paper}>
        <Grid
          container
          item
          direction="row"
          justify="flex-start"
          className={classes.obj}
        >
          <Keyboard color="inherit" />
          <Typography color="inherit" variant="body1">
            WPM {currentWPM ? currentWPM.toFixed(2) : '0.00'}
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="flex-start"
          className={classes.obj}
        >
          <Score color="inherit" />
          <Typography variant="body1" color="inherit">
            Accuracy {(currentAccuracy * 100).toFixed(2)}%
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default WPMDisplay;
