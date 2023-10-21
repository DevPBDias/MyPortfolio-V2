import styled from 'styled-components';
import JobCard from '../utils/JobCard';
import { devices } from '../../data/mediaQueries';

const ContainerJobs = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: 1em;

    h1 {
        font-size: 2rem;
        color: var(--hover-orange);
        margin-right: auto;
        padding: 0 .5em;
    }

    @media ${devices.landscapePhones} {
      h1 {
        font-size: 1.5rem;
      }
  }
`;

const ContainerCards = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 100%;
    margin-top: .5em;
`;

function Jobs() {
  return (
    <ContainerJobs>
      <h1>Experiência</h1>
      <ContainerCards>
        <JobCard
          city="Palmas-TO"
          company="Autônomo"
          job="Freelancer"
          kind="Meio período"
          time="Abril 2023 - atual"
          type="Online"
        />
        <JobCard
          city="Palmas-TO"
          company="Machado Construções e Avaliações"
          job="Engenheiro de avaliações de imóveis"
          kind="Meio período"
          time="Out 2019 - atual"
          type="Híbrido"
        />
      </ContainerCards>
    </ContainerJobs>
  );
}

export default Jobs;
