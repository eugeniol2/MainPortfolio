import React from 'react';
import { AboutPage } from '../../Pages/AboutPage';
import GreetingsPage from '../../Pages/GreetingsPage';
import { PageContainer } from './styles';

export const Home: React.FC = () => {
  const Pages = [<GreetingsPage />, <AboutPage />];
  return (
    <>
      {Pages.map((page) => (
        <PageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.1 }}
        >
          {page}
        </PageContainer>
      ))}
    </>
  );
};
