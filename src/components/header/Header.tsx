import styled from 'styled-components';
import MyLogo from '../my-logo/MyLogo';
import Burger from './Burger';

const HeaderBar = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderBar>
      <MyLogo />
      <Burger />
    </HeaderBar>
  );
}

export default Header;
