import styled from 'styled-components';
import ProjectCard from '../utils/ProjectCard';
import walletPage from '../../assets/projects/walletPage.png';
import olemidia from '../../assets/projects/olemidia.png';
import maxTraining from '../../assets/projects/max-training.png';
import recipeApp from '../../assets/projects/recipeApp.png';
import trivia from '../../assets/projects/trivia.png';
import trybetunes from '../../assets/projects/trybetunes.png';

import { devices } from '../../data/mediaQueries';

const ContainerProjects = styled.div`
    margin-top: 2em;
    padding: 0.5em;

    h2 {
        font-size: 2rem;
        padding: 0.5em;
    }

    p {
        font-size: 1.2rem;
        padding: 0.5em;
    }
`;

const ContainerCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: auto;
    padding: 0.5em;
    margin-top: .5em;

    @media ${devices.landscapePhones} {
      width: 100%;
    }
`;

function Projects() {
  return (
    <ContainerProjects>
      <h2>Meus projetos</h2>
      <p>Meus melhores projetos até o momento:</p>
      <ContainerCards>
        <ProjectCard
          description="Um site para clientes conhecerem sobre a Olé Mídia,
           uma empresa que cuida da imagem de atletas. O site também permite
           aos visitantes entrarem em contato com a Olé que recebe as
           mensagens no email da empresa."
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
          description="Um dos projetos em grupo, realizado na Trybe.
          É um app mobile que faz uso de uma api de receitas de comidas e bebidas.
          Eu desenvolvi a tela de perfil do usuário, a tela de detalhes da receita,
          o menu inferior e o css da aplicação."
          image={ recipeApp }
          name="App de receitas"
          stacks="Tech stack : React Hooks, Css, Js, Trello"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias/Project-Recipes-App"
          urlProject="https://app-recipes-flax.vercel.app/"
        />
        <ProjectCard
          description="Um dos projetos em grupo,realizado no curso da Trybe.
          É um jogo que faz uso de uma api de perguntas e respostas.
          Eu desenvolvi a tela de ranking, a tela de jogos em pairprogramming
          com um colega do projeto e o css da aplicação."
          image={ trivia }
          name="Trivia Game"
          stacks="Tech stack : React Redux, Css, Js, Kanban"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias/Projetc-Trivia-React-Redux"
          urlProject="https://github.com/DevPBDias/Projetc-Trivia-React-Redux"
        />
        <ProjectCard
          description="Projeto individual da Trybe em que se faz uso de uma api de
          musicas."
          image={ trybetunes }
          name="Trybetunes"
          stacks="Tech stack : React Hooks, Ts, Tailwind Css, Vite"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias/Trybetunes-TS"
          urlProject="https://github.com/DevPBDias/Trybetunes-TS"
        />
        <ProjectCard
          description="Nessa aplicação, se faz uso de uma api de cotação de moedas
           extrangeiras. O usuário faz login e consegue fazer a conversão do real
           para moeda que desejar."
          image={ walletPage }
          name="Trybewallet"
          stacks="Tech stack : Html, Css , Js, React Redux"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias/Trybewallet"
          urlProject="https://github.com/DevPBDias/Trybewallet"
        />
      </ContainerCards>
    </ContainerProjects>
  );
}

export default Projects;
