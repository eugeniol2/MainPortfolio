import { Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import {
  Container,
  ContentContainer,
  FullProjectLink,
  ProjectDescription,
  TextContainer,
} from './styles';
import { colors } from '../../styles/theme';
import { CustomButton } from '../../Pages/GreetingsPage/styles';
// https://image.shutterstock.com/image-illustration/3d-render-abstract-minimal-futuristic-600w-1708270069.jpg

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
