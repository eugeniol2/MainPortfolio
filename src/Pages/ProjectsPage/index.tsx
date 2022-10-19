import React from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { Container } from './styles';
import Project from '../../components/Project';

export const ProjectsPage: React.FC = () => {
  const [document] = useAllPrismicDocumentsByType('project');
  return (
    <Container>
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
