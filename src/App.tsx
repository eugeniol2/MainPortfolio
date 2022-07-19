import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Home } from './View/Home';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import ErrorPage from './components/ErrorPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};

export default App;
