import React from 'react';
import { ThinkingGuy } from '../../animations/ThinkingGuy';
import { TextBox } from '../../components/TextBox';
import { Container, WrapperContainer } from './styles';

export const AboutPage = (): JSX.Element => {
  return (
    <WrapperContainer>
      <Container>
        <TextBox title="Educação">
          Atualmente, estou cursando Sistemas de Informação na UFRPE, o que me
          permite aprimorar minhas habilidades e conhecimentos nessa área em
          constante evolução. Além disso, tive a oportunidade de estudar com a
          Rocketseat e a Frontend Masters, duas das maiores referências em
          educação em tecnologia.
        </TextBox>

        <TextBox title="Tecnologias">
          React, Next.js, CSS, API REST, React Native e TypeScript são alguns
          exemplos de tecnologias que costumo utilizar em projetos pessoais.
        </TextBox>
      </Container>
      <ThinkingGuy />
    </WrapperContainer>
  );
};
