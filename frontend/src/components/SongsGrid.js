import React from 'react';
import styled from 'styled-components';
import { Song } from './Song';
import { Button } from './NavBar';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const SongContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  // padding: 0.3rem;
  border-radius: 1rem;
  grid-template-columns: repeat(4, 1fr);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export function SongsGrid({ songs }) {
  return (
    <>
      <Container>
        <SongContainer
          style={{
            filter: 'brightness(110%)',
            background: 'white',
            color: 'black',
          }}
        >
          <h3>Title</h3>
          <h3>Artist</h3>
          <h3>Album</h3>
          <h3>Year</h3>
        </SongContainer>
        {songs.map(song => (
          <Song key={song._id} song={song} />
        ))}
      </Container>
    </>
  );
}
