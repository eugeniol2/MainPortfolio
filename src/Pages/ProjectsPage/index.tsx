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
        // <Link to={`/post/${item.id}`}>
        <Project
          key={item.id}
          title={item?.data.title}
          stacks={item?.data.type}
          imageURL={item?.data.picture.url}
          description={item?.data.description}
          gitHubLink="https://github.com/eugeniol2/ig.news"
        />
        // </Link>
      ))}
    </Container>

    // <Container>
    //   <Project
    //     imageURL="https://img.freepik.com/fotos-premium/tubarao-martelo-sphyrnidae-nadando-em-submarinos-tropicais-tubarao-martelo-no-mundo-subaquatico-observacao-do-oceano-de-vida-selvagem-aventura-de-mergulho-na-costa-equatoriana-de-galapagos_289152-5330.jpg?w=996"
    //     title="Farm Metrics"
    //     stacks="React.JS | Styled components | Framer motion"
    //     description="Lorsed do eim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo "
    //     gitHubLink="https://github.com/eugeniol2/ig.news"
    //   />
    // </Container>
  );
};
