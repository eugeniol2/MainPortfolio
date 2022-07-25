import React from 'react';
import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react';
import ProjectCard from '../../components/ProjectCard';
import { Container } from './styles';

export const ProjectsPage: React.FC = () => {
  const [document] = useFirstPrismicDocument();
  return (
    <Container>
      <div>
        {/* {document && (
          <PrismicRichText field={document.data.example_rich_text} />
        )} */}
        <button type="button" onClick={() => console.log(document)}>
          test
        </button>
      </div>
    </Container>
  );
};
