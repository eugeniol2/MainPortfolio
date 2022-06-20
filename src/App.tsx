import React from 'react';
import { Home } from './View/Home';

import { NavigationBar } from './components/NavigationBar';

import { GlobalStyle, MainContainer } from './styles/global';

const App: React.FC = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <Home />
      <GlobalStyle />
    </MainContainer>
  );
};

export default App;
