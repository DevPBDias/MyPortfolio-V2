import styled from 'styled-components';
import DownloadCV from './DownloadCV';
import { devices } from '../../data/mediaQueries';

const ContainerText = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: left;
    width: 100%;
    margin-top: 1em;

    h1 {
        font-size: 2rem;
        color: var(--hover-orange);
        margin-right: auto;
        padding: 0 .5em;
    }

    p {
        font-size: 1rem;
        padding-block: .5em;
        width: 85%;
        border-bottom: 1px solid gray;
    }

    @media ${devices.landscapePhones} {
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: .8rem;
      }
    }
`;

function ContentText() {
  return (
    <ContainerText>
      <h1>About me</h1>
      <p>
        Sou desenvolvedor front-end, formado pela Trybe.
        Durante minha jornada como aluno, aprendi diversos conhecimentos para
        aflorar minha paixão pela tecnologia, desenvolver minha criatividade e aprimorar
        meu trabalho de equipe. Hoje me considero capaz de criar websites e aplicativos
        desafiadores que possam se apresentar para mim.
        <br />
        <br />
        Atualmente estou aprimorando meus conhecimentos adquiridos com projetos pessoais,
        cursos e um projeto com grupo de amigos que fiz no curso da Trybe. Meu intuito
        como dev é ajudar o máximo de clientes possíveis para deixar o cotidiano deles
        mais leve.
      </p>
      <p>
        Meu hobbies são:
        <br />
        - Jogar basquete
        <br />
        - Jogar jogos onlines
        <br />
        - Assistir animes, filmes e séries
        <br />
        - Ouvir rock e mpb
        <br />
        - Codar um simples e limpo código
        <br />
      </p>
      <DownloadCV />
    </ContainerText>
  );
}

export default ContentText;
