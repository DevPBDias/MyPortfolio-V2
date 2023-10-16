import styled from 'styled-components';
import ContentText from '../components/about/ContentText';
import Jobs from '../components/about/Jobs';
import Education from '../components/about/Education';
import { devices } from '../data/mediaQueries';

const ContainerAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin: 5em auto 2em auto;

    .content {
      margin: auto;
      width: 80%;
    }

    @media ${devices.mobile} {
      .content {
      width: 100%;
    }
    }
`;

function About() {
  return (
    <ContainerAbout>
      <div className="content">
        <ContentText />
        <Jobs />
        <Education />
      </div>
    </ContainerAbout>
  );
}

export default About;
