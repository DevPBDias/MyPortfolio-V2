import styled from 'styled-components';
import ProjectCard from '../utils/ProjectCard';
import walletPage from '../../assets/projects/walletPage.png';
import recipeApp from '../../assets/projects/recipeApp.png';
import trivia from '../../assets/projects/trivia.png';
import trybetunes from '../../assets/projects/trybetunes.png';

const TitleContainer = styled.p`
  color: var(--hover-orange);
  font-weight: 600;
`;

function ContainerProjects() {
  return (
    <>
      <TitleContainer>Projetos da Trybe</TitleContainer>
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
    </>
  );
}

export default ContainerProjects;
