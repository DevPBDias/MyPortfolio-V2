import styled from 'styled-components';

const ContainerBtn = styled.div`
    margin: auto;
    
    button {
        padding: .5em;
        font-size: 1rem;
        background-color: var(--hover-orange);
        color: var(--bg-primary);
    }
`;

function DonwloadCV() {
  return (
    <ContainerBtn>
      <button>Donwload CV</button>
    </ContainerBtn>
  );
}

export default DonwloadCV;
