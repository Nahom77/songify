import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

export function NavBar() {
  return (
    <Header>
      <h2>Songify</h2>
      <Button>+ Add</Button>
    </Header>
  );
}
