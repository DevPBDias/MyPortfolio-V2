import styled from 'styled-components';
import Presentation from '../components/home/Presentation';
import myPhoto from '../assets/images/my-photo.png';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';

const ContainerHome = styled.main`
    padding: 0 5% ;
`;

function Home() {
  return (
    <ContainerHome>
      <Presentation
        title="Hi, my name is"
        name="Paulo Bruno"
        photo={ myPhoto }
        subtitle="Turning ideas into reality"
      />
      <Skills />
      <Projects />
    </ContainerHome>
  );
}

export default Home;
