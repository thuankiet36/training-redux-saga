import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import theme from './../../commons/Theme/index';
import Taskboard from './../Taskboard/index';
import styles from './styles';

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
