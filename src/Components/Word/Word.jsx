import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Word = ({ children, variant, classes }) => {
  return (
    <Grid item className={'word'}>
      <Typography className={classes} variant={variant} color="primary">
        {children}
      </Typography>
    </Grid>
  );
};

Word.defaultProps = {
  variant: 'subtitle1',
};

export default Word;
