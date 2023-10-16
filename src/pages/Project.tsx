import styled from 'styled-components';
import Freelancer from '../components/projects/Freelancer';
import TrybeProjects from '../components/projects/TrybeProjects';
import { devices } from '../data/mediaQueries';

const ContainerProjects = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    margin: 1em auto;
    padding: 0.5em;
    width: 80%;
    margin: 5em auto 2em auto;

    h2 {
        font-size: 2rem;
        padding: 0.5em;
        text-align: left;
        width: 100%;
    }

    p {
        font-size: 1.2rem;
        padding: 0.5em;
        text-align: left;
        width: 100%;
    }

    @media ${devices.landscapePhones} {
      width: 100%;
    }
`;

const ContainerCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0.5em;
    margin-top: .5em;
`;

function Projects() {
  return (
    <ContainerProjects>
      <h2>My Projects</h2>
      <p>Things I’ve built so far</p>
      <ContainerCards>
        <Freelancer />
        <TrybeProjects />
      </ContainerCards>
    </ContainerProjects>
  );
}

export default Projects;
