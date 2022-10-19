import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Container } from './styles';

const AsideSocialMediaMenu: React.FC = () => {
  return (
    <Container>
      <IconButton
        color="secondary"
        size="large"
        target="blank"
        href="https://github.com/eugeniol2"
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        color="secondary"
        size="large"
        target="blank"
        href="https://www.linkedin.com/in/eugenio-dorneles-araujo/"
      >
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
    </Container>
  );
};

export default AsideSocialMediaMenu;
