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
          focado no desenvolvimento WEB, e logo mais mobile.
        </TextBox>

        <TextBox title="Tecnologias">
          Por cursar sistemas de informação tenho um certo conhecimento com
          Python, entretanto, meu foco, atualmente, está no react.js e Next.js.
          Também utilizo várias bibliotecas interessantes para WEB: Styled
          components, Material ui, Formik, React hook form, Toastify e etc.
        </TextBox>
      </Container>
      <ThinkingGuy />
    </WrapperContainer>
  );
};
