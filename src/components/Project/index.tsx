import { Link, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Container,
  Description,
  ImageContainer,
  LinkContent,
  Stacks,
  TextContainer,
  Title,
} from './styles';
import { colors } from '../../styles/theme';

interface ProjectCardProps {
  imageURL: string;
  title: string;
  description: string;
  stacks: string;
  gitHubLink: string;
}

const Project: React.FC<ProjectCardProps> = ({
  title,
  description,
  stacks,
  imageURL,
  gitHubLink,
}: ProjectCardProps) => {
  return (
    <Container whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}>
      <ImageContainer imageURL={imageURL} />
      <TextContainer>
        <Title>
          <Typography
            variant="h3"
            component="h3"
            fontFamily="montserrat"
            fontWeight="bold"
            fontSize="32px"
            color={colors.secondary_300}
          >
            {title}
          </Typography>
        </Title>
        <Description>
          <Typography
            variant="body1"
            component="p"
            fontFamily="inter"
            fontWeight="regular"
            fontSize="16px"
          >
            {description.length > 154
              ? `${description.substring(0, 154)}...`
              : description}
          </Typography>
        </Description>
        <Stacks>
          <Typography
            variant="h3"
            component="h1"
            fontFamily="montserrat"
            fontWeight="bold"
            fontSize="24px"
            color={colors.secondary_300}
          >
            Stacks:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontFamily="inter"
            fontWeight="regular"
            fontSize="16px"
          >
            {stacks}
          </Typography>
        </Stacks>
        <Link href={gitHubLink} target="blank" underline="none">
          <Typography
            variant="body1"
            component="p"
            fontFamily="inter"
            fontWeight="regular"
            fontSize="16px"
          >
            <LinkContent>
              <GitHubIcon />
              Ver projeto completo
            </LinkContent>
          </Typography>
        </Link>
      </TextContainer>
    </Container>
  );
};

export default Project;
