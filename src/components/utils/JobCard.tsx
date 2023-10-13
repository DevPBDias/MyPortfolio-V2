import styled from 'styled-components';

type ICardProps = {
  job: string,
  kind: string,
  company: string,
  city: string,
  type: string,
  time: string,
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
    }
`;

function JobCard({ job, kind, company, city, type, time }: ICardProps) {
  return (
    <ContainerCard>
      <div>
        <h3>{job}</h3>
        <small>{kind}</small>
      </div>
      <div>
        <p>{company}</p>
        <p>{city}</p>
        <p>{type}</p>
        <p>{time}</p>
      </div>
    </ContainerCard>
  );
}

export default JobCard;
