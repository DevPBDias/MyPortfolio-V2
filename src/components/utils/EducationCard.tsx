import styled from 'styled-components';

type ICardProps = {
  school: string,
  course: string,
  kind: string,
  time: string,
  type: string,
};

const ContainerCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-items: center;
    width: 100%;
    padding: 0.5em;

    div { 
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        justify-items: center;
        padding: 0.5em;
        width: 100%;
    }

    h3 {
        font-size: 1.5rem;
    }

    small {
        font-size: .8rem;
        background-color: var(--hover-orange);
        border-radius: 16px;
        padding: 0.2em;
    }

    p {
        font-size: 1rem;
        width: 30%;
    }
`;

function EducationCard({ school, course, kind, time, type }: ICardProps) {
  return (
    <ContainerCard>
      <div>
        <h3>{course}</h3>
        <small>{kind}</small>
      </div>
      <div>
        <p>{school}</p>
        <p>{type}</p>
        <p>{time}</p>
      </div>
    </ContainerCard>
  );
}

export default EducationCard;
