import styled from 'styled-components';
import ContentText from '../components/about/ContentText';
import Jobs from '../components/about/Jobs';
import Education from '../components/about/Education';

const ContainerAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
`;

function About() {
  return (
    <ContainerAbout>
      <ContentText
        title="About me"
        message="The Generator App is an online tool that helps you to
        export ready-made templates ready to work as your future website.
        It helps you to combine slides, panels and other components and
        export it as a set of static files: HTML/CSS/JS."
      />
      <Jobs />
      <Education />
    </ContainerAbout>
  );
}

export default About;
