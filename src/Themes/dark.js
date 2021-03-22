import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, deepOrange, teal, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#FFF',
      secondary: '#FFF',
      correct: teal[500],
      incorrect: pink[500],
    },
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    background: {
      default: '#343434',
    },
  },
});

theme.overrides = {};

export default theme;
