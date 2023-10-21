import styled from 'styled-components';
import BtnNavbar from './BtnNavbar';
import IconNavbar from './IconNavbar';
import linkedinLogo from '../../assets/icons/linkedin.webp';
import githubLogo from '../../assets/icons/github.webp';
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
    background-color: var(--header-footer);
    transform: ${({ open }: any) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    padding-top: 3.5em;
    transition: transform 0.4s ease-in-out;
    gap: .8em;

    .containerLinks {
      height: 45vh;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
    }

    .containerIcons {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
    }
  }
`;

function NavbarMobile({ open }: Props) {
  return (
    <NavBar open={ open }>
      <div className="containerLinks">
        <BtnNavbar route="" name="home" />
        <BtnNavbar route="about" name="sobre mim" />
        <BtnNavbar route="skills" name="habilidades" />
        <BtnNavbar route="projects" name="projetos" />
        <BtnNavbar route="contact" name="Contato" />
      </div>
      <div className="containerIcons">
        <IconNavbar
          url="https://www.linkedin.com/in/devpaulobrunomdias/"
          name="linkedin"
          image={ linkedinLogo }
        />
        <IconNavbar
          url="https://github.com/DevPBDias"
          name="github"
          image={ githubLogo }
        />
      </div>
    </NavBar>
  );
}

export default NavbarMobile;
