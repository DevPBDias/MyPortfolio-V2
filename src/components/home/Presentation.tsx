import styled from 'styled-components';

type IPresentationProps = {
  title: string,
  name: string,
  photo: string,
  subtitle: string,
};

const Content = styled.section`
    text-align: left;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    height: 90vh;

    h1 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        margin: auto;
    }

    span {
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        color: var(--hover-orange);
    }

    small {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem;
    }

    img {
        width: 350px;
        height: 350px;
        margin: auto;
    }
`;

function Presentation({ title, subtitle, name, photo }:IPresentationProps) {
  return (
    <Content>
      <h1>
        { title }
        <br />
        <span>{name}</span>
        <br />
        <small>{subtitle}</small>
      </h1>
      <img src={ photo } alt="dev-img" />
    </Content>
  );
}

export default Presentation;
