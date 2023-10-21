import styled from 'styled-components';
import Text from '../components/utils/Text';
import Footer from '../components/footer/Footer';
import { devices } from '../data/mediaQueries';

const ContainerContact = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin: 4em 0 0 0;
    padding: 2em;
    height: calc(100vh - 195px);

    p {
      font-size: 3rem;
      line-height: 4.5rem;
    }

    @media ${devices.landscapePhones} {
    height: calc(100vh - 205px);
      p {
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    }

    @media ${devices.mobile} {
    height: calc(100vh - 255px);
      p {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    }
`;

const Email = styled.p`
  color: var(--hover-orange);
`;

function Contact() {
  return (
    <>
      <ContainerContact>
        <Text message="Para qualquer tipo de dúvidas entre em contato:" />
        <Email>devpbdias@gmail.com</Email>
      </ContainerContact>
      <Footer />
    </>
  );
}

export default Contact;
