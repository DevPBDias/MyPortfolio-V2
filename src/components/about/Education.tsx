import styled from 'styled-components';
import EducationCard from '../utils/EducationCard';
import { devices } from '../../data/mediaQueries';

const ContainerEducation = styled.section`
    display: flex;
    flex-flow: column nowrap;
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

function Education() {
  return (
    <ContainerEducation>
      <h1>Formação acadêmica</h1>
      <ContainerCards>
        <EducationCard
          course="Desenvolvedor Web Full Stack"
          school="Trybe"
          kind="Meio período"
          time="Jan 2022 - Mar 2023"
          type="Online"
        />
        <EducationCard
          course="Engenharia civil"
          school="PUC-Goiás"
          kind="Integral"
          time="Ago 2012 - Jan 2017"
          type="Presencial"
        />
      </ContainerCards>
    </ContainerEducation>
  );
}

export default Education;
