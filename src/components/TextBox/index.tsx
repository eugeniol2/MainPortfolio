import Typography from '@mui/material/Typography';
import React from 'react';
import { Container } from './styles';

interface TextProps {
  title: string;
}

export const TextBox: React.FC<TextProps> = ({ title, children }) => {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="montserrat"
        fontWeight="bold"
        fontSize="48px"
      >
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {children}
      </Typography>
    </Container>
  );
};
