import React from 'react';
import { ThinkingGuy } from '../../animations/ThinkingGuy';
import { TextBox } from '../../components/TextBox';
import { Container, WrapperContainer } from './styles';

export const AboutPage = (): JSX.Element => {
  return (
    <WrapperContainer>
      <Container>
        <TextBox
          title="Educação"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur"
        />

        <TextBox
          title="Tecnologias"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur"
        />
      </Container>
      <ThinkingGuy />
    </WrapperContainer>
  );
};
