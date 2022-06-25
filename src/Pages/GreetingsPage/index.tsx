import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import React from 'react';
import PortraitCircles from '../../animations/PortraitCircles';

import { TextBox } from '../../components/TextBox';

import { Container, CustomButton, TextBoxContainer } from './styles';

const GreetingsPage: React.FC = () => {
  return (
    <Container>
      <TextBoxContainer>
        <Typography variant="h6" component="h3" color="white">
          Olá, me chamo
        </Typography>
        <TextBox
          title="Eugênio Araújo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <CustomButton
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Sobre
        </CustomButton>
      </TextBoxContainer>
      <PortraitCircles />
    </Container>
  );
};

export default GreetingsPage;
