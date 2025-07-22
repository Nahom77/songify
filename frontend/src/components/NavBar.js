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
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }

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
