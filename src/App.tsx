import React from 'react';
import { Global } from '@emotion/react';
import { Home } from './View/Home';

import { NavigationBar } from './components/NavigationBar';

import { GlobalStyles, MainContainer } from './styles/global';

const App: React.FC = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <Home />
      <Global styles={GlobalStyles} />
    </MainContainer>
  );
};

export default App;
