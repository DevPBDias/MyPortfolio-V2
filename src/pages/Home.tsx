import Presentation from '../components/home/Presentation';
import myPhoto from '../assets/images/MeCamisa.png';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <main>
      <Presentation
        title="Olá, meu nome é"
        name="Paulo Bruno"
        photo={ myPhoto }
        subtitle="Tornando ideias em realidade"
      />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
