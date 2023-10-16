import styled from 'styled-components';
import { devices } from '../../data/mediaQueries';

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
    height: calc(100vh - 82px);
    width: 100%;

    div {
        width: 60%;
        display: flex;
        flex-flow: column nowrap;
        justify-items: center;
        align-items: center;
        margin-top: calc(82px + 1em);
      }

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


    @media ${devices.landscapePhones} {
      flex-flow: column nowrap;
      margin: auto;
      margin-top: 2em;
      height: calc(100vh - 82px);


    h1 {
        font-size: 2rem;
        line-height: 3rem;
    }

    span {
        font-size: 2.5rem;
        line-height: 3rem;
    }

    small {
        font-size: 1.2rem;
        line-height: 2rem;
    }

      div {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        margin-top: calc(82px + 1em);
      }

    }
    
    @media ${devices.mobile} {
      img {
        width: 250px;
        height: 250px;
      }
    }

`;

function Presentation({ title, subtitle, name, photo }:IPresentationProps) {
  return (
    <Content>
      <div>
        <h1>
          { title }
          <br />
          <span>{name}</span>
          <br />
          <small>{subtitle}</small>
        </h1>
      </div>
      <img src={ photo } alt="dev-img" />
    </Content>
  );
}

export default Presentation;
