import styled from 'styled-components';
import logo from '../../assets/images/ideia.png';

const ContainerLogo = styled.picture`
  width: 4em;
  height: 4em;

  img {
    width: 4em;
    height: 4em;
  }
`;

function MyLogo() {
  return (
    <ContainerLogo className="container-logo">
      <img src={ logo } alt="logo-dev" className="logo" />
    </ContainerLogo>
  );
}

export default MyLogo;
