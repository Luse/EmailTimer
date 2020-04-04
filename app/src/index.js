import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./State/StateProvider";
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
    palette: {
      type:'dark',
      primary: {
          main: '#283593',
        },
        secondary: deepPurple,
    },
  })

ReactDOM.render(<StateProvider><ThemeProvider theme={theme}><App /></ThemeProvider></StateProvider>, document.getElementById('root'));
