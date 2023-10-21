import styled from 'styled-components';
import ProjectCard from '../utils/ProjectCard';
import olemidia from '../../assets/projects/olemidia.png';
import maxTraining from '../../assets/projects/max-training.png';
import nelore from '../../assets/projects/nelore.png';

const TitleContainer = styled.p`
  color: var(--hover-orange);
  font-weight: 600;
`;

function ContainerProjects() {
  return (
    <>
      <TitleContainer>Freelancer :</TitleContainer>
      <ProjectCard
        description="Um site para clientes conhecerem sobre a Olé Mídia,
           uma empresa que cuida da imagem de atletas."
        image={ olemidia }
        name="OléMídia"
        stacks="Tech stack : React Hooks, Css puro, Javascript, Figma"
        nameButtonOne="View project"
        nameButtonTwo="View code"
        urlGithub="https://github.com/DevPBDias/OleMidia-Site"
        urlProject="https://www.olemidia.com.br/"
      />
      <ProjectCard
        description="Um site de vendas de treinamentos para clientes acessarem e
          entenderem um pouco mais sobre o produto."
        image={ maxTraining }
        name="Max Training"
        stacks="Tech stack : React, Vite, Styled components, Ts, Figma"
        nameButtonOne="View project"
        nameButtonTwo="View code"
        urlGithub="https://github.com/DevPBDias/Max-Training-LP"
        urlProject="https://www.treinadorevertinho.com.br/"
      />
      <ProjectCard
        description="App mobile para vendas de touro nelore, está em produção.
         Sou responsável por toda a parte do front-end"
        image={ nelore }
        name="Nelore Indi Ouro"
        stacks="Tech stack : React Hooks, Js, Css, Axios, RTL, Kanban"
        nameButtonOne="View project"
        nameButtonTwo="View code"
        urlGithub="https://github.com/boicollection/nelore-indi-ouro-app/"
        urlProject="https://github.com/boicollection/nelore-indi-ouro-app/"
      />
    </>
  );
}

export default ContainerProjects;
