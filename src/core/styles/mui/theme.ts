import { createTheme } from "@mui/material";

// Here the theme for the whole app is created because the default values defined in the mui are different.
// The button component is overridden with special CSS details,
//  colors are also changed according to my own choice,
//  and some specifications of typography are also changed

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 56,
          textTransform: "none",
          fontSize: "16px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1c1c1c",
      light: "#3b3b3b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffe002",
      contrastText: "#ffffff",
    },
    background: {
      default: "#1c1c1c",
      paper: "#ffe002",
    },
    text: {
      primary: "#ffe002",
      secondary: "#1c1c1c",
      disabled: "#b4b4b4",
    },
  },
  typography: {
    h1: {
      fontSize: 34,
      fontWeight: 900,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
});
