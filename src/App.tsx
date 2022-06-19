import React from 'react';
import { HomeContent } from './components/HomeContent';

import { NavigationBar } from './components/navigationBar';

import { GlobalStyle, MainContainer } from './styles/global';

const App: React.FC = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <HomeContent />
      <GlobalStyle />
    </MainContainer>
  );
};

export default App;
