import styled from 'styled-components';
import logo from '../../assets/images/ideia.png';
import { devices } from '../../data/mediaQueries';

const ContainerLogo = styled.picture`
  width: 4em;
  height: 4em;

  img {
    width: 4em;
    height: 4em;
  }

  @media ${devices.landscapePhones} {
    margin-left: 2em;
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
