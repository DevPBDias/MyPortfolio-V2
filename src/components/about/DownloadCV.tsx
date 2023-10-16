import styled from 'styled-components';
import Profile from '../../assets/Profile.pdf';

const ContainerBtn = styled.div`
    margin:  1em auto;
    padding: 1em;
    
    a {
        padding: .5em;
        font-size: 1rem;
        background-color: var(--hover-orange);
        color: var(--bg-primary);
        border-radius: 8px;
    }
`;

function DownloadCV() {
  return (
    <ContainerBtn>
      <a
        href={ Profile }
        download="CV-Dev-Paulo-Bruno-Dias"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
    </ContainerBtn>
  );
}

export default DownloadCV;
