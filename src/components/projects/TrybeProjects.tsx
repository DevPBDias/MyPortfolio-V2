import styled from 'styled-components';
import project from '../../assets/images/project.png';
import ProjectCard from '../utils/ProjectCard';

const TitleContainer = styled.p`
  color: var(--hover-orange);
  font-weight: 600;
`;

function ContainerProjects() {
  return (
    <>
      <TitleContainer>Trybe Projects</TitleContainer>
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
    </>
  );
}

export default ContainerProjects;
