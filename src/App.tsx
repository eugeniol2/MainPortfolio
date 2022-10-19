import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Home } from './View/Home';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import ErrorPage from './Pages/ErrorPage';
import { NavigationBar } from './components/NavigationBar';
import { MainContainer } from './View/Home/styles';
import { ProjectsPage } from './Pages/ProjectsPage';
import { Post } from './Pages/Post';
import AsideSocialMediaMenu from './components/AsideSocialMediaMenu';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainContainer>
          <NavigationBar />
          <AsideSocialMediaMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </MainContainer>
      </Router>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};

export default App;
