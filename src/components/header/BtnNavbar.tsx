import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type IBtnNavbarProps = {
  name: string,
  route: string,
};

const Btn = styled.button`
    background-color: var(--bg-primary);
    padding: 0.5em;
    text-transform: uppercase;
    margin-inline: 0.5em;

    &:hover {
      color: var( --hover-orange)
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
