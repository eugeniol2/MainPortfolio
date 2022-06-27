import React from 'react';
import { PageContainer } from '../../styles/global';
import { AboutPage } from '../../Pages/AboutPage';
import { ExperiencePage } from '../../Pages/ExperiencePage';
import GreetingsPage from '../../Pages/GreetingsPage';
import { ContactMePage } from '../../Pages/ContactMePage';

export const Home: React.FC = () => {
  const Pages = [
    <GreetingsPage />,
    <AboutPage />,
    <ExperiencePage />,
    <ContactMePage />,
  ];
  return (
    <>
      {Pages.map((page) => (
        <PageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {page}
        </PageContainer>
      ))}
    </>
  );
};
