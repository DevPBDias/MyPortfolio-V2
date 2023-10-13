import styled from 'styled-components';
import BtnNavbar from '../header/BtnNavbar';
import IconNavbar from '../header/IconNavbar';
import MyLogo from '../my-logo/MyLogo';
import linkedinLogo from '../../assets/icons/linkedin.png';
import githubLogo from '../../assets/icons/github.png';

const FooterBar = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin: auto;
`;

const FirstContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin: auto;
    width: 100%;
    padding-inline: 5%;

    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      gap: 3em;
    }

    p {
      font-size: .7rem;
    }

    nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
    }
`;

const SeconContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin: auto;
    width: 100%;
    padding-inline: 5%;

    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      gap: 3em;
    }

    p {
      font-size: .7rem;
    }

    nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
    }
`;

function Footer() {
  return (
    <FooterBar>
      <FirstContent>
        <MyLogo />
        <div>
          <p>telefone</p>
          <p>email</p>
          <nav>
            <IconNavbar name="linkedin" image={ linkedinLogo } />
            <IconNavbar name="github" image={ githubLogo } />
          </nav>
        </div>
      </FirstContent>
      <SeconContent>
        <div>
          <BtnNavbar route="about" name="About me" />
          <BtnNavbar route="skills" name="Skills" />
          <BtnNavbar route="projects" name="Projects" />
          <BtnNavbar route="contact" name="Contact me" />
        </div>
        <p>Designed and built by Pavan MG with Love & Coffee</p>
      </SeconContent>
    </FooterBar>
  );
}

export default Footer;
