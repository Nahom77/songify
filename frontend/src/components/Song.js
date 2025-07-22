import React from 'react';
import { SongContainer } from './SongsGrid';
import { Link } from 'react-router-dom';

export function Song({ song }) {
  return (
    <Link
      to={`/song/${song._id}`}
      style={{ textDecoration: 'none', color: 'white' }}
    >
      <SongContainer>
        <h4>{song.title}</h4>
        <h4>{song.artist}</h4>
        <h4>{song.album}</h4>
        <h4>{song.year}</h4>
      </SongContainer>
    </Link>
  );
}
