import styled from 'styled-components';
import BtnNavbar from './BtnNavbar';
import IconNavbar from './IconNavbar';
import linkedinLogo from '../../assets/icons/linkedin.png';
import githubLogo from '../../assets/icons/github.png';
import { devices } from '../../data/mediaQueries';

type Props = {
  open: boolean,
};

const NavBar = styled.nav<Props>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  gap: 2em;

  div {
    padding: 0.5em;
  }

  @media ${devices.landscapePhones} {
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    position: fixed;
    transform: ${({ open }: any) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    padding-top: 3.5em;
    transition: transform 0.4s ease-in-out;
    gap: .8em;
  }
`;

function NavbarMobile({ open }: Props) {
  return (
    <NavBar open={ open }>
      <div>
        <BtnNavbar route="" name="home" />
        <BtnNavbar route="about" name="About me" />
        <BtnNavbar route="skills" name="Skills" />
        <BtnNavbar route="projects" name="Projects" />
        <BtnNavbar route="contact" name="Contact me" />
      </div>
      <div>
        <IconNavbar name="linkedin" image={ linkedinLogo } />
        <IconNavbar name="github" image={ githubLogo } />
      </div>
    </NavBar>
  );
}

export default NavbarMobile;
