import React from 'react';
import { Container, MenuOptions } from './styles';

export const NavigationBar: React.FC = () => {
  return (
    <Container>
      <h1> picture </h1>
      <MenuOptions>
        <h4>Sobre</h4>
        <h4>Experiência</h4>
        <h4>Projetos</h4>
        <h4>Contato</h4>
        <h4>Curriculo</h4>
      </MenuOptions>
    </Container>
  );
};
