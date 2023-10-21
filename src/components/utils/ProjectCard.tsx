import styled from 'styled-components';
import { devices } from '../../data/mediaQueries';

type IProjectCardProps = {
  image: string,
  name: string,
  description: string,
  stacks: string,
  nameButtonOne: string,
  nameButtonTwo: string,
  urlProject: string,
  urlGithub: string,
};

const ContentCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    width: 17em;
    height: 25em;
    margin: 1em;
    border-radius: 16px;
    background-color: var(--bg-secondary);
    
    .imgProject {
      border-radius: 16px 16px 0 0;
      width: 100%;
      height: 180px;
    }
    
    h4 {
      color: var(--bg-primary);
        padding-inline: .5em;
        font-size: 1rem;
    }

    .text {
      color: var(--bg-primary);
        font-size: .7rem;
        padding-inline: .5em;
        text-align: center;
    }

    small {
      color: var(--bg-primary);
        font-size: .7rem;
        padding-inline: .5em;
    }

    @media ${devices.landscapePhones} {
    h4 {
        padding-inline: .3em;
    }

    .text {
        font-size: .7rem;
        padding-inline: .2em;
    }

    small {
        font-size: .7rem;
        padding-inline: .2em;
    }
    }
`;

const ContainerBtns = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;
    

    a {
        width: 8em;
        font-size: .7rem;
        padding: .4em;
        margin-bottom: .5em;
        background-color: var(--bg-secondary);
        border: none;
        text-decoration: underline;
        color: var(--bg-primary);
    }

`;

function ProjectCard(props: IProjectCardProps) {
  const { image, name, description, stacks, nameButtonOne,
    nameButtonTwo, urlProject, urlGithub } = props;

  return (
    <ContentCard>
      <img className="imgProject" src={ image } alt={ name } />
      <h4>{name}</h4>
      <p className="text">{description}</p>
      <small>{stacks}</small>
      <ContainerBtns>
        <a
          href={ `${urlProject}` }
          target="_blank"
          rel="noopener noreferrer"
        >
          {nameButtonOne}
        </a>
        <a
          href={ `${urlGithub}` }
          target="_blank"
          rel="noopener noreferrer"
        >
          {nameButtonTwo}
        </a>
      </ContainerBtns>
    </ContentCard>
  );
}

export default ProjectCard;
