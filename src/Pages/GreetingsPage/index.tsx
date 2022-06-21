import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { TextBox } from '../../components/TextBox';
import { TextBoxContainer } from '../../View/Home/styles';
import { CustomButton } from './styles';

const GreetingsPage: React.FC = () => {
  return (
    <TextBoxContainer>
      <h3>Olá, me chamo</h3>
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
  );
};

export default GreetingsPage;
