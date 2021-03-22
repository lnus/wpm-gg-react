import React, { useContext } from 'react';
import { GameStateContext } from '../GameState/GameStateContext';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ButtonGroup,
  makeStyles,
  Slide,
  Button,
  Typography,
} from '@material-ui/core';
// import './Endscreen.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgrondColor: 'black',
  },
}));

const Endscreen = () => {
  const classes = useStyles();

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

  const handleClose = () => {
    resetGame();
    setShowEndScreen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={showEndScreen}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          backgroundColor: 'rgba(0,0,0, 0.8)',
          boxShadow: 'none',
          padding: 20,
        },
      }}
      keepMounted
      className={classes.dialog}
    >
      <DialogTitle>
        <Typography variant="h4">Final results</Typography>
      </DialogTitle>
      <DialogContent className={classes.diacontent}>
        <Typography variant="body1">
          WPM: {finalWPM ? finalWPM.toFixed(2) : 0}
        </Typography>
        <Typography variant="body1">
          Accuracy: {(finalAccuracy * 100).toFixed(2)}%
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        <Button
          onClick={() => {
            alert('Not implemented yet');
            handleClose();
          }}
          color="primary"
        >
          Share
        </Button>
      </DialogActions>
    </Dialog>
    // <div
    //   className="end-screen"
    //   style={showEndScreen ? { display: 'inherit' } : { display: 'none' }}
    // >
    //   <div className="end-screen__inner">
    //     <div className="end-screen__inner-content">
    //       <div className="end-screen__inner-content-header">Final stats:</div>

    //       <div className="end-screen__menu">
    //         <button
    //           className="end-screen__menu-button"
    //           onClick={(e) => {
    //           }}
    //         >
    //           Close
    //         </button>
    //         <button
    //           className="end-screen__menu-button end-screen__menu-button--green"
    //           onClick={(e) => {
    //             alert('not implemented :(');
    //           }}
    //         >
    //           Share!
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Endscreen;
