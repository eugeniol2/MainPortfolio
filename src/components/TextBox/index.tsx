import Typography from '@mui/material/Typography';
import React from 'react';
import { Container } from './styles';

interface TextProps {
  title: string;
  subtitle?: string;
}

export const TextBox: React.FC<TextProps> = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="montserrat"
        fontWeight="bold"
        fontSize="3rem"
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        fontFamily="montserrat"
        fontWeight="regular"
      >
        {subtitle}
      </Typography>
      <Typography variant="body1" component="p">
        {children}
      </Typography>
    </Container>
  );
};
