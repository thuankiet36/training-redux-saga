import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#616161',
    secondary: '#CDDC39',
    error: '#7B1FA2',
  },
  typoraphy: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#FF4081',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});

export default theme;
