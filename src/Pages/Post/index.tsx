import React from 'react';
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  useFirstPrismicDocument,
} from '@prismicio/react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container } from './styles';

export const Post: React.FC = () => {
  const [document] = useAllPrismicDocumentsByType('project');
  const { id } = useParams();
  return (
    <Container>
      <div>post {id}</div>
    </Container>
  );
};
