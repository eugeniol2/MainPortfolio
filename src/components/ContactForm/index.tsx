import TextField from '@mui/material/TextField';
import React from 'react';

import { Container } from './styles';

const ContactForm: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <TextField id="Name" label="Nome" />
      <TextField id="Email" label="E-mail" />
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={8}
        defaultValue="Default Value"
      />
    </Container>
  );
};

export default ContactForm;
