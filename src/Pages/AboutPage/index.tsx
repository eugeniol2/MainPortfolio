import React from 'react';
import { ThinkingGuy } from '../../animations/ThinkingGuy';
import { TextBox } from '../../components/TextBox';
import { Container, WrapperContainer } from './styles';

export const AboutPage = (): JSX.Element => {
  return (
    <WrapperContainer>
      <Container>
        <TextBox title="Educação">
          Estudante de sistemas de informação na UFRPE, desde 2019. Costumo
          também estudar por conta propria a partir de cursos online, atualmente
          focado no desenvolvimento WEB.
        </TextBox>

        <TextBox title="Tecnologias">
          Por cursar sistemas de informação tenho um certo conhecimento com
          Python, entretanto, meu foco atualmente está no React.JS e Next.JS .
          Também tenho conhecimento em várias bibliotecas interessantes tais
          como: Styled components, Material ui, Formik, React hook form,
          Toastify.
        </TextBox>
      </Container>
      <ThinkingGuy />
    </WrapperContainer>
  );
};
