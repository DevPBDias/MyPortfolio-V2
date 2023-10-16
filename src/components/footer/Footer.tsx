import styled from 'styled-components';
import BtnNavbar from '../header/BtnNavbar';
import IconNavbar from '../header/IconNavbar';
import MyLogo from '../my-logo/MyLogo';
import linkedinLogo from '../../assets/icons/linkedin.png';
import githubLogo from '../../assets/icons/github.png';
import { devices } from '../../data/mediaQueries';

const FooterBar = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
    background-color: var(--header-footer);
    color: var(--bg-primary);
    padding-block: .8em;
`;

const FirstContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    margin: auto;
    width: 100%;
    margin-bottom: .5em;

    div {
      display: flex;
      flex-flow: row nowrap;
      justify-items: center;
      align-items: center;
      gap: 2em;
    }

    p {
      font-size: .7rem;
      color: var(--bg-primary);
    }

    nav {
      display: flex;
      flex-flow: row nowrap;
      justify-items: center;
      align-items: center;
    }

    @media ${devices.mobile} {
      flex-flow: column nowrap;
      
      .info {
        display: block;
      }
    }
`;

const SeconContent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      justify-items: center;
      align-items: center;
    }

    p {
      font-size: .6rem;
      color: var(--bg-primary);
    }

    @media ${devices.landscapePhones} {
      flex-flow: column nowrap;

      div {
        gap: .5em;
        padding: 0 .5em;
        justify-content: center;
      }
    }

`;

function Footer() {
  return (
    <FooterBar>
      <FirstContent>
        <MyLogo />
        <div>
          <div className="info">
            <p>+55 (63) 99231-0976</p>
            <p>devpbdias@gmail.com</p>
          </div>
          <nav>
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
          </nav>
        </div>
      </FirstContent>
      <SeconContent>
        <div>
          <BtnNavbar route="" name="home" />
          <BtnNavbar route="about" name="About" />
          <BtnNavbar route="skills" name="Skills" />
          <BtnNavbar route="projects" name="Projects" />
          <BtnNavbar route="contact" name="Contact" />
        </div>
        <p>Designed and built by Pavan MG with Love & Coffee</p>
      </SeconContent>
    </FooterBar>
  );
}

export default Footer;
