import React from 'react';
import { ThinkingGuy } from '../../animations/ThinkingGuy';
import ContactForm from '../../components/ContactForm';
import { Container } from './styles';

export const ContactMePage: React.FC = () => {
  return (
    <Container>
      {/* <ContactForm /> */}
      <ThinkingGuy />
    </Container>
  );
};
