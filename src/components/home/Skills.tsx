import styled from 'styled-components';
import ts from '../../assets/icons/ts-skills.webp';
import js from '../../assets/icons/js-skills.webp';
import css from '../../assets/icons/css-skills.webp';
import react from '../../assets/icons/react-skills.webp';
import tailwind from '../../assets/icons/tailwind-skills.webp';
import vscode from '../../assets/icons/vscode-skills.webp';
import github from '../../assets/icons/github-skills.webp';
import git from '../../assets/icons/git-skills.webp';
import styledComponents from '../../assets/icons/styled-skills.svg';
import trello from '../../assets/icons/trello-skills.webp';
import { devices } from '../../data/mediaQueries';

const ContainerSkills = styled.section`
    margin-block: 5%;
    padding: 0.5em;

    h2 {
        font-size: 2rem;
        padding: 0.5em;
    }

    p {
        font-size: 1.2rem;
        padding: 0.5em;
    }

    @media ${devices.landscapePhones} {
    justify-content: space-between;
  }
`;

const ContainerIcons = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: auto;
    padding: 0.5em;
    margin-top: .5em;
    background-color: var(--bg-secondary);
    border-radius: 8px;

    img {
        width: 7em;
        height: 7em;
        margin: 1.5em;
    }

    @media ${devices.landscapePhones} {
      img {
        width: 4em;
        height: 4em;
    }
  }
`;

function Skills() {
  return (
    <ContainerSkills>
      <h2>My Tech Stack</h2>
      <p> Technologies I’ve been working with recently</p>
      <ContainerIcons>
        <img src={ ts } alt="ts-skills" />
        <img src={ js } alt="js-skills" />
        <img src={ css } alt="css-skills" />
        <img src={ react } alt="react-skills" />
        <img src={ tailwind } alt="tailwind-skills" />
        <img src={ styledComponents } alt="styled-skills" />
        <img src={ git } alt="git-skills" />
        <img src={ github } alt="github-skills" />
        <img src={ vscode } alt="vscode-skills" />
        <img src={ trello } alt="trello-skills" />
      </ContainerIcons>
    </ContainerSkills>
  );
}

export default Skills;
