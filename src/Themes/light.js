import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange, red, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#000',
      secondary: '#000',
      correct: green[600],
      incorrect: red[600],
    },
    primary: {
      main: blue[600],
    },
    secondary: {
      main: orange[600],
    },
    correct: {
      color: green[600],
    },
    incorrect: {
      color: red[600],
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme.overrides = {};

export default theme;
