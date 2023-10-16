import styled from 'styled-components';
import ProjectCard from '../utils/ProjectCard';
import project from '../../assets/images/project.png';
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
      <h2>My Projects</h2>
      <p>Things I’ve built so far</p>
      <ContainerCards>
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
        <ProjectCard
          description="This is sample project description random things
            are here in description"
          image={ project }
          name="Project Name"
          stacks="Tech stack : HTML , JavaScript, SASS, React"
          nameButtonOne="View project"
          nameButtonTwo="View code"
          urlGithub="https://github.com/DevPBDias"
          urlProject="https://www.olemidia.com.br/"
        />
      </ContainerCards>
    </ContainerProjects>
  );
}

export default Projects;
