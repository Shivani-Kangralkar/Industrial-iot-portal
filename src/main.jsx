import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from '@mui/material/colors';
import {Provider} from 'react-redux'
import store from './redux-store/store.jsx'

const theme = createTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#0080FF",
      blue: blue[900]
    },
    secondary: {
      main: "#DBE6FF",
      s2: "#F1F7FB",
      s3: "#DEEEFF",
    },
    greyShades: {
      grey1: "#9C9C9C",
      grey2: "#E9E9E9",
      grey3: "#989898",
    },
  },

  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <CssBaseline />
    <Box>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Box>
  </React.StrictMode>
  </Provider>
);
