import React from 'react';
import logoImg from '../../assets/Logo.svg';
import NavLink from '../NavLink';
import { Container, MenuOptions } from './styles';

export const NavigationBar: React.FC = () => {
  return (
    <Container
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <img src={logoImg} alt="Eugênio Araújo" />
      <MenuOptions>
        <NavLink path="/" text="Sobre" />
        <NavLink path="/projects" text="Projetos" />
      </MenuOptions>
    </Container>
  );
};
