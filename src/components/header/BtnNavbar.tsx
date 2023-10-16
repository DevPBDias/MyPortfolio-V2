import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../data/mediaQueries';

type IBtnNavbarProps = {
  name: string,
  route: string,
};

const Btn = styled.button`
    background-color: var(--bg-primary);
    padding: 0.5em;
    text-transform: uppercase;
    margin-inline: 0.5em;
    font-weight: 600;
    background-color: var(--header-footer);
    color: var(--bg-primary);
    border: none;

    &:hover {
      color: var( --hover-orange)
    }

    @media ${devices.landscapePhones} {
      font-size: .8rem;
  }
`;

function BtnNavbar({ name, route }: IBtnNavbarProps) {
  const navigate = useNavigate();

  return (
    <Btn
      type="button"
      className="btn-navbar"
      onClick={ () => navigate(`/${route}`) }
    >
      {name}
    </Btn>
  );
}

export default BtnNavbar;
