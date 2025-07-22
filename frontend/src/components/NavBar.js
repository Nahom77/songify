import React from 'react';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.3rem;

  &:hover {
    filter: brightness(110%);
  }
`;

export function NavBar() {
  return (
    <HeaderContainer>
      <h2>Songify</h2>
      <Link to={'/add'} style={{ textDecoration: 'none' }}>
        <Button>
          <PlusIcon width='35' />
          Add
        </Button>
      </Link>
    </HeaderContainer>
  );
}
