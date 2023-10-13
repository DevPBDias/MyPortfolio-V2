import styled from 'styled-components';
import JobCard from '../utils/JobCard';

const ContainerJobs = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 80%;
    margin-top: 1em;

    h1 {
        font-size: 2rem;
        color: var(--hover-orange);
        margin-right: auto;
        padding: 0 .5em;
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
      <h1>Work Experience</h1>
      <ContainerCards>
        <JobCard
          city="Goainia"
          company="PRS e Foco Engenharia"
          job="Engenheiro de avaliações de imoveis"
          kind="Full time"
          time="Ago 2014 - Jan 2015"
          type="Presencial"
        />
        <JobCard
          city="Goainia"
          company="PRS e Foco Engenharia"
          job="Engenheiro de avaliações de imoveis"
          kind="Full time"
          time="Ago 2014 - Jan 2015"
          type="Presencial"
        />
        <JobCard
          city="Goainia"
          company="PRS e Foco Engenharia"
          job="Engenheiro de avaliações de imoveis"
          kind="Full time"
          time="Ago 2014 - Jan 2015"
          type="Presencial"
        />
      </ContainerCards>
    </ContainerJobs>
  );
}

export default Jobs;
