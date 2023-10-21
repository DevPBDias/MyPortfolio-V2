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
    align-items: center;
    justify-items: center;
    height: calc(100vh - 82px);
    padding-top: 8%;

    .text-home {
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        justify-items: center;
        align-items: center;
      }

    .img-home {
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        justify-items: center;
        align-items: center;
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
        border: 4px solid var(--hover-orange);
        border-radius: 100%;
        width: 600px;
        height: 650px;
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

    .text-home {
        width: 100%;
        padding-block: 2em;
    }

    .img-home {
        width: 100%;
        padding-block: 2em;
    }

      img {
        width: 400px;
        height: 450px;
    }

    }
    
    @media ${devices.mobile} {
      .text-home {
        width: 100%;
        margin-block: 2em;
    }

    .img-home {
        width: 100%;
        margin-block: 2em;
    }

      img {
        width: 250px;
        height: 300px;
      }
    }

`;

function Presentation({ title, subtitle, name, photo }:IPresentationProps) {
  return (
    <Content>
      <div className="text-home">
        <h1>
          { title }
          <br />
          <span>{name}</span>
          <br />
          <small>{subtitle}</small>
        </h1>
      </div>
      <div className="img-home">
        <img src={ photo } alt="dev-img" />
      </div>
    </Content>
  );
}

export default Presentation;
