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
        <PageContainer>{page}</PageContainer>
      ))}
    </>
  );
};
