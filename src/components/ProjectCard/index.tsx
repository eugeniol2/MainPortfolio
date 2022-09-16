import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import {
  Container,
  ContentContainer,
  ProjectDescription,
  TextContainer,
} from './styles';
import { colors } from '../../styles/theme';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageURL: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageURL,
  description,
}: ProjectCardProps) => {
  return (
    <Container>
      <ContentContainer
        imageURL={imageURL}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      >
        <TextContainer>
          <Typography
            variant="h3"
            component="h3"
            fontFamily="montserrat"
            fontWeight="bold"
            fontSize="48px"
            color={colors.secondary_300}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontFamily="montserrat"
            fontWeight="semi-bold"
            fontSize="24px"
            color={colors.secondary_200}
          >
            {subtitle}
          </Typography>
        </TextContainer>
      </ContentContainer>
      <ProjectDescription>
        <Typography
          variant="h3"
          component="h3"
          fontFamily="montserrat"
          fontWeight="bold"
          fontSize="16px"
        >
          {description}
        </Typography>
      </ProjectDescription>
    </Container>
  );
};

export default ProjectCard;
