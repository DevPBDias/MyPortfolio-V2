import styled from 'styled-components';
import MyLogo from '../my-logo/MyLogo';
import Burger from './Burger';
import { devices } from '../../data/mediaQueries';

const HeaderBar = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--header-footer);
    padding: .5em;

  @media ${devices.landscapePhones} {
    justify-content: space-between;
  }

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
