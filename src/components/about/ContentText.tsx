import styled from 'styled-components';
import DonwloadCV from './DonwloadCV';

type ITextProps = {
  title: string,
  message: string,
};

const ContainerText = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: left;
    width: 80%;
    margin-top: 1em;

    h1 {
        font-size: 2rem;
        color: var(--hover-orange);
        margin-right: auto;
        padding: 0 .5em;
    }

    p {
        font-size: 1rem;
        padding: 1em;
    }
`;

function ContentText({ title, message }: ITextProps) {
  return (
    <ContainerText>
      <h1>{title}</h1>
      <p>{message}</p>
      <DonwloadCV />
    </ContainerText>
  );
}

export default ContentText;
