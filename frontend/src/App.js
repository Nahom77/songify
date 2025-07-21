import React from 'react';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { HomePage } from './pages/HomePage';

// styled

const AllContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 750px) {
    width: 95%;
  }
`;

export function App() {
  return (
    <AllContainer>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </AllContainer>
  );
}
