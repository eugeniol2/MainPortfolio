import React from 'react';
import { PageContainer } from '../../styles/global';
import { AboutPage } from '../../Pages/AboutPage';
import { TextBox } from '../../components/TextBox';
import { TextBoxContainer } from './styles';
import { ExperiencePage } from '../../Pages/ExperiencePage';

export const Home: React.FC = () => {
  return (
    <>
      <PageContainer>
        <TextBoxContainer>
          <h3>Olá, me chamo</h3>
          <TextBox
            title="Eugênio Araújo"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur"
          />
          <button type="button">Custom Order</button>
        </TextBoxContainer>
      </PageContainer>
      <AboutPage />
      <ExperiencePage />
    </>
  );
};
