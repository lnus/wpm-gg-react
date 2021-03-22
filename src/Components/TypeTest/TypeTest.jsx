import randomWords from 'random-words';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GameStateContext } from '../GameState/GameStateContext';
import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import Word from '../Word/Word';

// TODO: General, make it count chars rather than words. Or both. :)

// TODO: Use themeprovider for colors
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5px',
    alignItems: 'center',
    justify: 'center',
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  wordContainer: {
    fontSize: 20,
  },
  input: {
    fontsize: 20,
    padding: 32,
  },
  correct: {
    color: 'green',
  },
  incorrect: {
    color: 'red',
  },
}));

const TypeTest = () => {
  const classes = useStyles();

  const {
    targetWords,
    setTargetWords,
    completedWords,
    setCompletedWords,
    currentTarget,
    setCurrentTarget,
    currentUserInput,
    setCurrentUserInput,
    setCurrentWordCorrect,
    timerSignalStart,
    setTimerSignalStart,
    resetGame,
  } = useContext(GameStateContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = '';
    setCurrentUserInput('');
  }, [resetGame, setCurrentUserInput]);

  const isCurrentWordCorrect = (word) => {
    if (currentTarget.startsWith(word) || word === '' || word === ' ') {
      setCurrentWordCorrect(true);
    } else {
      setCurrentWordCorrect(false);
    }
  };

  const handleSubmit = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setCurrentWordCorrect(true);

      // Checks if the user has inputted the correct word (true|false)
      const correctWordInput = currentTarget === currentUserInput.trim();
      const completedWordEntry = {
        word: currentTarget,
        correct: correctWordInput,
      };

      // Updates the completedWords state
      const newCompletedWords = completedWords.concat([completedWordEntry]);
      setCompletedWords(newCompletedWords);

      // Updates the currentTarget state
      const newTargetWord = targetWords[1];
      setCurrentTarget(newTargetWord);

      // Updates the targetWords state appending a new target word
      setTargetWords([
        ...targetWords.slice(1),
        randomWords({ exactly: 1, maxLength: 7 })[0],
      ]);
      console.log(targetWords);

      // Resets the user input
      inputRef.current.value = null;
      setCurrentUserInput('');

      // Prevents a refresh on the submit
      e.preventDefault();
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3} md={4} lg={6}>
        <Paper className={classes.paper}>
          <Grid
            container
            item
            spacing={1}
            direction="row"
            className={classes.wordContainer}
          >
            {/* TODO: make this more dynamic so we can display more elements */}
            {completedWords.slice(-20).map((wordData) => {
              return wordData.correct ? (
                <Word classes={classes.correct}>{wordData.word}</Word>
              ) : (
                <Word classes={classes.incorrect}>{wordData.word}</Word>
              );
            })}
            <Word>{currentTarget}</Word>
            {targetWords.map((word) => {
              if (word !== currentTarget) return <Word>{word}</Word>;
            })}
          </Grid>
        </Paper>
      </Grid>
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        direction="row"
        zeroMinWidth
      >
        <Grid item>
          <TextField
            variant="outlined"
            color="primary"
            inputRef={inputRef}
            className={classes.input}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            placeholder="type here"
            tabIndex="0"
            autoFocus
            onFocus={(e) => {
              e.target.placeholder = '';
            }}
            onBlur={(e) => {
              e.target.placeholder = 'type here';
            }}
            onInput={(e) => {
              setCurrentUserInput(e.target.value);
              isCurrentWordCorrect(e.target.value);
            }}
            onKeyPress={(e) => {
              if (!timerSignalStart) setTimerSignalStart(true);
              handleSubmit(e);
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TypeTest;
