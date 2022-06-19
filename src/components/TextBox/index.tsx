import React from 'react';
import { Container } from './styles';

interface TextProps {
  title: string;
  text: string;
}

export const TextBox: React.FC<TextProps> = ({ title, text }: TextProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  );
};
