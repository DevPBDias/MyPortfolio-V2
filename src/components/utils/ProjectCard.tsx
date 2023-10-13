import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type IProjectCardProps = {
  image: string,
  name: string,
  description: string,
  stacks: string,
  nameButton: string,
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
    
    img {
        width: 100%;
    }
    
    h4 {
        padding-inline: .5em;
        font-size: 1rem;
    }

    p {
        font-size: .8rem;
        padding-inline: .5em;
    }

    small {
        font-size: .7rem;
        padding-inline: .5em;
    }
`;

const ContainerBtns = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;

    button {
        width: 8em;
        background-color: var(--bg-primary);
        color: var(--text-color-white);
        font-size: .7rem;
        padding: .4em;
    }

`;

function ProjectCard(props: IProjectCardProps) {
  const { image, name, description, stacks, nameButton } = props;
  const navigate = useNavigate();

  return (
    <ContentCard>
      <img src={ image } alt={ name } />
      <h4>{name}</h4>
      <p>{description}</p>
      <small>{stacks}</small>
      <ContainerBtns>
        <button
          type="button"
          onClick={ () => navigate('') }
        >
          {nameButton}
        </button>
        <button
          type="button"
          onClick={ () => navigate('') }
        >
          {nameButton}
        </button>
      </ContainerBtns>
    </ContentCard>
  );
}

export default ProjectCard;
