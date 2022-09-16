import React from 'react';
import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  useFirstPrismicDocument,
} from '@prismicio/react';
import { Link, useLocation } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import { Container } from './styles';
import Project from '../../components/Project';

export const ProjectsPage: React.FC = () => {
  const [document] = useAllPrismicDocumentsByType('project');
  return (
    // remover comentário abaixo para voltar ao normal
    // <Container>
    //   <div>
    //     {console.log(document)}
    //     {document?.map((item) => (
    //       <Link to={`/post/${item.id}`}>
    //         <ProjectCard
    //           key={item.id}
    //           title={item?.data.title}
    //           subtitle={item?.data.type}
    //           imageURL={item?.data.picture.url}
    //           description={item?.data.description}
    //         />
    //       </Link>
    //     ))}
    //   </div>
    // </Container>
    <Container>
      <Project
        imageURL="https://img.freepik.com/fotos-premium/tubarao-martelo-sphyrnidae-nadando-em-submarinos-tropicais-tubarao-martelo-no-mundo-subaquatico-observacao-do-oceano-de-vida-selvagem-aventura-de-mergulho-na-costa-equatoriana-de-galapagos_289152-5330.jpg?w=996"
        title="teste"
        subtitle="subtitleTest"
        description="Descrição de exemplo que tem que ser bem grande"
      />
      <Project
        imageURL="https://img.freepik.com/fotos-premium/tubarao-martelo-sphyrnidae-nadando-em-submarinos-tropicais-tubarao-martelo-no-mundo-subaquatico-observacao-do-oceano-de-vida-selvagem-aventura-de-mergulho-na-costa-equatoriana-de-galapagos_289152-5330.jpg?w=996"
        title="teste"
        subtitle="subtitleTest"
        description="Descrição de exemplo que tem que ser bem grande"
      />
      <Project
        imageURL="https://img.freepik.com/fotos-premium/tubarao-martelo-sphyrnidae-nadando-em-submarinos-tropicais-tubarao-martelo-no-mundo-subaquatico-observacao-do-oceano-de-vida-selvagem-aventura-de-mergulho-na-costa-equatoriana-de-galapagos_289152-5330.jpg?w=996"
        title="teste"
        subtitle="subtitleTest"
        description="Descrição de exemplo que tem que ser bem grande"
      />
      <Project
        imageURL="https://img.freepik.com/fotos-premium/tubarao-martelo-sphyrnidae-nadando-em-submarinos-tropicais-tubarao-martelo-no-mundo-subaquatico-observacao-do-oceano-de-vida-selvagem-aventura-de-mergulho-na-costa-equatoriana-de-galapagos_289152-5330.jpg?w=996"
        title="teste"
        subtitle="subtitleTest"
        description="Descrição de exemplo que tem que ser bem grande"
      />
    </Container>
  );
};
