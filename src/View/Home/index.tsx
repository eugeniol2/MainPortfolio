import React from 'react';
import { AboutPage } from '../../Pages/AboutPage';
import { ProjectPage } from '../../Pages/ExperiencePage';
import GreetingsPage from '../../Pages/GreetingsPage';
import { ContactMePage } from '../../Pages/ContactMePage';
import { PageContainer } from './styles';

export const Home: React.FC = () => {
  const Pages = [
    <GreetingsPage />,
    <AboutPage />,
    <ProjectPage />,
    <ContactMePage />,
  ];
  return (
    <>
      {Pages.map((page) => (
        <PageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          {page}
        </PageContainer>
      ))}
    </>
  );
};
