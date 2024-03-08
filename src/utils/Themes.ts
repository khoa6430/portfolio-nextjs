import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1C1C27",
      paper: "#1C1E27",
    },
    primary: {
      main: "#854CE6",
    },
    text: {
      primary: "#F2F3F4",
      secondary: "#b1b2b3",
    },
    action: {
      active: "#854CE6",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
      paper: "#f0f0f0",
    },
    primary: {
      main: "#be1adb",
    },
    text: {
      primary: "#111111",
      secondary: "#48494a",
    },
    action: {
      active: "#5c5b5b",
    },
  },
});
