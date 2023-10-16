import styled from 'styled-components';
import { devices } from '../../data/mediaQueries';

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
    border-bottom: 1px solid gray;

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
        border-radius: 8px;
        padding: 0.4em;
        font-weight: 500;
    }

    p {
        font-size: 1rem;
    }

    @media ${devices.landscapePhones} {
      p {
        font-size: .8rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    small {
        font-size: .6rem;
    }
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
