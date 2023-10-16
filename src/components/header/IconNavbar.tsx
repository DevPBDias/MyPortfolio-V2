import styled from 'styled-components';

type IconProps = {
  image: string,
  name: string,
  url: string,
};

const LinkIcon = styled.a`
  padding: 0.5em;
`;

const IconNav = styled.img`
  width: 30px;
  height: 30px;
`;

function IconNavbar({ image, name, url }: IconProps) {
  return (
    <LinkIcon href={ `${url}` }>
      <IconNav
        src={ image }
        alt={ name }
        className="icon-navbar"
      />
    </LinkIcon>
  );
}

export default IconNavbar;
