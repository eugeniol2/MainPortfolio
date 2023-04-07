import { Link, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import {
  Container,
  ImageContainer,
  LinkContent,
  LinksContainer,
  Stacks,
  TextContainer,
} from './styles';
import { colors } from '../../styles/theme';

interface ProjectCardProps {
  imageURL: string;
  title: string;
  description: string;
  stacks: string;
  gitHubLink: string;
  deployLink: string;
}

export const Project: React.FC<ProjectCardProps> = ({
  title,
  description,
  stacks,
  imageURL,
  gitHubLink,
  deployLink,
}) => {
  return (
    <Container>
      <ImageContainer imageURL={imageURL} />
      <TextContainer>
        <Typography
          variant="h3"
          component="h3"
          fontFamily="montserrat"
          fontWeight="bold"
          fontSize="32px"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          color={colors.primary_300}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          fontFamily="inter"
          fontWeight="regular"
          fontSize="16px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {description.length > 154
            ? `${description.substring(0, 154)}...`
            : description}
        </Typography>

        <Stacks>
          <Typography
            variant="h3"
            component="h1"
            fontFamily="montserrat"
            fontWeight="bold"
            fontSize="24px"
            color={colors.primary_300}
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
        <LinksContainer>
          {deployLink && (
            <Link href={deployLink} target="blank" underline="none">
              <Typography
                variant="body1"
                component="p"
                fontFamily="inter"
                fontWeight="regular"
                fontSize="16px"
              >
                <LinkContent>
                  <LinkIcon />
                  Ir a endereço hospedado
                </LinkContent>
              </Typography>
            </Link>
          )}
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
                Saiba mais
              </LinkContent>
            </Typography>
          </Link>
        </LinksContainer>
      </TextContainer>
    </Container>
  );
};
