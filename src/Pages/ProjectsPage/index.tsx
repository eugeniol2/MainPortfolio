import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { WrapperContainer } from './styles';

export const ProjectsPage: React.FC = () => {
  return (
    <WrapperContainer>
      <ProjectCard
        title="Ignite"
        subtitle="React-Js"
        imageURL="https://image.shutterstock.com/image-illustration/3d-render-abstract-minimal-futuristic-600w-1708270069.jpg"
      />
      <ProjectCard
        title="Ignite"
        subtitle="React-Js"
        imageURL="https://image.shutterstock.com/image-illustration/3d-render-abstract-minimal-futuristic-600w-1708270069.jpg"
      />
      <ProjectCard
        title="Ignite"
        subtitle="React-Js"
        imageURL="https://image.shutterstock.com/image-illustration/3d-render-abstract-minimal-futuristic-600w-1708270069.jpg"
      />
    </WrapperContainer>
  );
};
