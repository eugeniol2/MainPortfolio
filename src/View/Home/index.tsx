import React from 'react';
import { AboutPage } from '../../Pages/AboutPage';
import { ExperiencePage } from '../../Pages/ExperiencePage';
import GreetingsPage from '../../Pages/GreetingsPage';
import { ContactMePage } from '../../Pages/ContactMePage';
import { NavigationBar } from '../../components/NavigationBar';
import { MainContainer, PageContainer } from './styles';

export const Home: React.FC = () => {
  const Pages = [
    <GreetingsPage />,
    <AboutPage />,
    <ExperiencePage />,
    <ContactMePage />,
  ];
  return (
    <MainContainer>
      <NavigationBar />
      {Pages.map((page) => (
        <PageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {page}
        </PageContainer>
      ))}
    </MainContainer>
  );
};
