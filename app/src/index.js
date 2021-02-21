import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./State/StateProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Raleway",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: purple,
    secondary: {
      main: "#7860dc",
    },
  },
});

ReactDOM.render(
  <StateProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StateProvider>,
  document.getElementById("root")
);
