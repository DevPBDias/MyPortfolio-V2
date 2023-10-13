import styled from 'styled-components';
import ts from '../../assets/icons/ts-skills.png';
import js from '../../assets/icons/js-skills.png';
import css from '../../assets/icons/css-skills.png';
import react from '../../assets/icons/react-skills.png';
import tailwind from '../../assets/icons/tailwind-skills.png';
import vscode from '../../assets/icons/vscode-skills.png';
import github from '../../assets/icons/github-skills.png';
import git from '../../assets/icons/git-skills.png';
import styledComponents from '../../assets/icons/styled-skills.svg';
import trello from '../../assets/icons/trello-skills.png';

const ContainerSkills = styled.section`
    margin-top: 2em;
    padding: 0.5em;
    height: 100vh;


    h2 {
        font-size: 2rem;
        padding: 0.5em;

    }

    p {
        font-size: 1.2rem;
        padding: 0.5em;
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

    img {
        width: 7em;
        height: 7em;
        margin: 1.5em;
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
