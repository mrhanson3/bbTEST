import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: { main: deepOrange[900] },
    secondary: { main: teal[700] },
    type: 'light',
  },
});

export { theme };
