import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { SongsGrid } from '../components/SongsGrid';
import toast from 'react-hot-toast';
import api from '../lib/axios';

import styled, { keyframes } from 'styled-components';

// Rotate animation for the spinner
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled spinner component
const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid white;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
  margin: 0 auto;
`;

// Container for the spinner and messages
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

// Message text styling
const LoadingMessage = styled.p`
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
`;

export function HomePage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await api.get('/songs');
        setSongs(res.data);
      } catch (error) {
        console.log('Error - ', error.message);
        toast.error('Failed to load songs');
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  console.log(songs);

  if (loading)
    return (
      <LoadingContainer>
        <Spinner />
        <LoadingMessage>
          Loading ... Since our backend is deployed on free tier it may take 2-3
          minutes to load.
        </LoadingMessage>
      </LoadingContainer>
    );

  return (
    <>
      <NavBar />
      <SongsGrid songs={songs} />
    </>
  );
}
