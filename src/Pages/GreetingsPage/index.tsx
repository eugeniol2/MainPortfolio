import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { TextBox } from '../../components/TextBox';
import { TextBoxContainer } from '../../View/Home/styles';

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
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </TextBoxContainer>
  );
};

export default GreetingsPage;
