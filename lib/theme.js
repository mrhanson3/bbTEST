import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[800] },
    secondary: { main: teal[700] },
    type: 'light',
  },
});

export { theme };
