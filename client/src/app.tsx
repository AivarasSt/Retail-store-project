import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './styles/theme';
import PageRouter from './routing/page-router';
import store from './store';

const App: React.FC = () => {
  const location = useLocation();

  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    if (location.pathname.includes('/shop')) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [location]);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <PageRouter />
        </CssBaseline>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
