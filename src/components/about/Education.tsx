import styled from 'styled-components';
import EducationCard from '../utils/EducationCard';

const ContainerEducation = styled.section`
    display: flex;
    flex-flow: column nowrap;
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

function Education() {
  return (
    <ContainerEducation>
      <h1>Education</h1>
      <ContainerCards>
        <EducationCard
          course="Engenharia civil"
          school="Engenheiro de avaliações de imoveis"
          kind="Full time"
          time="Ago 2012 - Jan 2017"
          type="Presencial"
        />
        <EducationCard
          course="Desenvolvedor Web Full Stack"
          school="Trybe"
          kind="Half time"
          time="Jan 2022 - Mar 2023"
          type="Online"
        />
      </ContainerCards>
    </ContainerEducation>
  );
}

export default Education;
