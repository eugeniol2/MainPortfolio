import { Typography } from '@mui/material';
import React from 'react';
import logoImg from '../../assets/Logo.svg';
import { Container, MenuOptions } from './styles';

export const NavigationBar: React.FC = () => {
  const NavItems = ['Sobre', 'Experiência', 'Projetos', 'Contato', 'Curriculo'];
  return (
    <Container>
      <img src={logoImg} alt="Eugênio Araújo" />
      <MenuOptions>
        {NavItems.map((item) => (
          <Typography
            variant="button"
            component="a"
            color="white"
            fontFamily="inter"
          >
            {item}
          </Typography>
        ))}
      </MenuOptions>
    </Container>
  );
};
