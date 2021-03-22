import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MenuBook, Brush } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

const MenuBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">placeholder.io</Typography>
          <div className={classes.toolbarButtons}>
            <IconButton edge="start">
              <MenuBook color="secondary" />
            </IconButton>
            <IconButton>
              {/* Add a interaction to select theme here */}
              <Brush color="secondary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
