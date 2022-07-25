import { Button, Typography } from '@mui/material';
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageURL,
}: ProjectCardProps) => {
  return (
    <Container>
      <ContentContainer imageURL={imageURL}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          nobis ut facilis tempore. Quas harum dolores dolore sint reiciendis
          porro maxime nam, ex ipsam accusamus excepturi. Fuga illum totam
          voluptatem?
        </Typography>
      </ProjectDescription>
    </Container>
  );
};

export default ProjectCard;
