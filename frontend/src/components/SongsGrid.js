import React from 'react';
import styled from 'styled-components';
import { Song } from './Song';

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`;

export const SongContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.3rem;
`;

export function SongsGrid() {
  return (
    <Container>
      <SongContainer>
        <h3>Title</h3>
        <h3>Artist</h3>
        <h3>Album</h3>
        <h3>Year</h3>
      </SongContainer>
      <Song />
    </Container>
  );
}
