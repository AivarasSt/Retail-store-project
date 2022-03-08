import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Marcellus SC',
      'Julius Sans One',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const darkTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#111112',
      light: '#151515',
    },
    secondary: {
      main: '#ffffff',
      light: '#eeeeee',
    },
    background: {
      default: '#111112',
    },
    bruh: {
      main: '#ff0000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#111112',
    },
  },
  mixins: {
    toolbar: {
      height: 72,
    },
    footer: {
      height: {
        desktop: 360,
        mobile: 64,
      },
    },
  },
});

export const lightTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#ffffff',
      light: '#eeeeee',
    },
    secondary: {
      main: '#111112',
      light: '#151515',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#111112',
      secondary: '#ffffff',
    },
  },
  mixins: {
    toolbar: {
      height: 72,
    },
    footer: {
      height: {
        desktop: 128,
        mobile: 64,
      },
    },
  },
});

export default darkTheme;
