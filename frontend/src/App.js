import React from 'react';
import { NavBar } from './components/NavBar';
import styled from 'styled-components';

// styled

const AllContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 450px) {
    width: 95%;
  }
`;

export function App() {
  return (
    <AllContainer>
      <NavBar />
    </AllContainer>
  );
}
