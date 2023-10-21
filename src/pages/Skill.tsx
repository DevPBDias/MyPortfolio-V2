import styled from 'styled-components';
import ts from '../assets/icons/ts-skills.webp';
import js from '../assets/icons/js-skills.webp';
import css from '../assets/icons/css-skills.webp';
import react from '../assets/icons/react-skills.webp';
import tailwind from '../assets/icons/tailwind-skills.webp';
import vscode from '../assets/icons/vscode-skills.webp';
import github from '../assets/icons/github-skills.webp';
import git from '../assets/icons/git-skills.webp';
import styledComponents from '../assets/icons/styled-skills.svg';
import trello from '../assets/icons/trello-skills.webp';
import sass from '../assets/icons/sass-skills.webp';
import html from '../assets/icons/html-skills.webp';
import { devices } from '../data/mediaQueries';

const ContainerSkills = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    margin: 1em auto;
    padding: 0.5em;
    width: 80%;
    margin: 5em auto 0 auto;
    
    h2 {
        text-align: left;
        width: 100%;
        padding: 0.5em;
        font-size: 2rem;

    }

    p {
        font-size: 1.2rem;
        padding: 0.5em;
        width: 100%;
        text-align: left;
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: auto;
    padding: 0.5em;
    margin-block: 1.5em;

    img {
        width: 5em;
        height: 5em;
        margin: 1.5em;
    }

    @media ${devices.mobile} {
    width: 100%;

    img {
        width: 3em;
        height: 3em;
    }
  }
`;

function Skills() {
  return (
    <ContainerSkills>
      <h2>Minhas Habilidades</h2>
      <p>Tecnologias que eu venho trabalhando ultimamente :</p>
      <ContainerIcons>
        <img src={ ts } alt="ts-skills" />
        <img src={ js } alt="js-skills" />
        <img src={ html } alt="html-skills" />
        <img src={ css } alt="css-skills" />
        <img src={ react } alt="react-skills" />
        <img src={ tailwind } alt="tailwind-skills" />
        <img src={ styledComponents } alt="styled-skills" />
        <img src={ git } alt="git-skills" />
        <img src={ github } alt="github-skills" />
        <img src={ vscode } alt="vscode-skills" />
        <img src={ trello } alt="trello-skills" />
      </ContainerIcons>
      <p>Próximo tecnologia a ser aprendida :</p>
      <ContainerIcons>
        <img src={ sass } alt="sass-skills" />
      </ContainerIcons>
    </ContainerSkills>
  );
}

export default Skills;
