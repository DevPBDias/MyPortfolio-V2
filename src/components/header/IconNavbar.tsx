import styled from 'styled-components';

type IconProps = {
  image: string,
  name: string,
};

const IconNav = styled.img`
    margin-inline: 0.5em;
`;

function IconNavbar({ image, name }: IconProps) {
  return (
    <IconNav src={ image } alt={ name } className="icon-navbar" />
  );
}

export default IconNavbar;
