import Typography from '@mui/material/Typography';
import React from 'react';
import PortraitCircles from '../../animations/PortraitCircles';
import { colors } from '../../styles/theme';
import { TextBox } from '../../components/TextBox';
import { Container, TextBoxContainer } from './styles';
import { NavigationBar } from '../../components/NavigationBar';
import ResumeButton from '../../components/ResumeButton';

const GreetingsPage: React.FC = () => {
  return (
    <>
      <Container>
        <TextBoxContainer>
          <Typography variant="h6" component="h3">
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
          <ResumeButton text="Curriculo" />
        </TextBoxContainer>
        <PortraitCircles />
      </Container>
    </>
  );
};

export default GreetingsPage;
