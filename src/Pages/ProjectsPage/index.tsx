import React from 'react';
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  useFirstPrismicDocument,
} from '@prismicio/react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';
import Project from '../../components/Project';

export const ProjectsPage: React.FC = () => {
  const [document] = useAllPrismicDocumentsByType('project');
  return (
    <Container>
      {console.log(document)}
      {document?.map((item) => (
        <Project
          key={item.id}
          title={item?.data.title}
          stacks={item?.data.type}
          imageURL={item?.data.picture.url}
          description={item?.data.description}
          gitHubLink={item?.data.githuburl.url}
        />
      ))}
    </Container>
  );
};
