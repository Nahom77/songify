import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { SongsGrid } from '../components/SongsGrid';
import toast from 'react-hot-toast';
import api from '../lib/axios';

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

  return (
    <>
      <NavBar />
      <SongsGrid songs={songs} />
    </>
  );
}
