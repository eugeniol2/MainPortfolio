import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import { Container, ImageContainer, TextContainer, Title } from './styles';
import { colors } from '../../styles/theme';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageURL: string;
  description: string;
}

const Project: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageURL,
  description,
}: ProjectCardProps) => {
  return (
    <Container>
      <ImageContainer
        imageURL={imageURL}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      />
      <TextContainer>
        <Title>title</Title>
        {subtitle}
        {description}
      </TextContainer>
    </Container>
  );
};

export default Project;
