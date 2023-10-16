import { useState } from 'react';
import styled from 'styled-components';
import NavbarMobile from './NavbarMobile';
import { devices } from '../../data/mediaQueries';

type Props = {
  open: boolean,
};

const StyledBurger = styled.div<Props>`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 1.8em;
  right: 2em;
  z-index: 98;
  display: none;
  
  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }: any) => (open
    ? 'var(--bg-primary)' : 'var(--bg-primary)')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: any) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }: any) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: any) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }: any) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${devices.landscapePhones} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 2em;
    right: 5em;
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={ open } onClick={ () => setOpen(!open) }>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarMobile open={ open } />
    </>
  );
}

export default Burger;
