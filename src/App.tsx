import React from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Home } from './View/Home';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};

export default App;
