import Presentation from '../components/home/Presentation';
import myPhoto from '../assets/images/my-photo.png';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <main>
      <Presentation
        title="Hi, my name is"
        name="Paulo Bruno"
        photo={ myPhoto }
        subtitle="Turning ideas into reality"
      />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
