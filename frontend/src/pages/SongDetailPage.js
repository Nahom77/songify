import React, { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../lib/axios';
import toast from 'react-hot-toast';

// Glassmorphism base
const glass = `
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
`;

// Main background
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgb(2, 2, 2);
`;

// Container layout
const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

// Card
const Card = styled.div`
  ${glass};
  padding: 2rem;
  margin-top: 1rem;
`;

// Form controls
const FormControl = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: white;
  margin-bottom: 0.25rem;
`;

// Input and textarea
const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background-color: rgba(255, 255, 255, 0.77);
  color: rgb(49, 51, 58);
  font-size: 1rem;
`;

// Top bar
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Styled links and buttons
const GhostButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  padding: 0.5rem 1rem;
  border: none;
  color: white;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(156, 163, 175, 0.2);
  }
`;

const OutlineButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #dc2626;
  border: 1px solid #dc2626;
  background: transparent;
  font-weight: 500;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgba(220, 38, 38, 0.1);
  }
`;

const PrimaryButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Loading spinner
const FullscreenCenter = styled.div`
  min-height: 100vh;
  background-color: rgb(0, 0, 0); /* Tailwind's base-200 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(LoaderIcon)`
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 1s linear infinite;
`;

export function SongDetailPage() {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/songs/${id}`);
        setSong(res.data);
      } catch (error) {
        console.error('Error in fetching song - ', error.message);
        toast.error('Failed to load song.');
      } finally {
        setLoading(false);
      }
    };
    fetchSong();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this song?')) return;

    try {
      setLoading(true);
      await api.delete(`/songs/${id}`);
      toast.success('Song deleted successfully.');
      navigate('/');
    } catch (error) {
      console.error('Error deleting song - ', error.message);
      toast.error('Failed to delete song');
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    if (
      !song?.title.trim() ||
      !song?.artist.trim() ||
      !song?.album.trim() ||
      !toString(song?.year).trim()
    ) {
      toast.error('All fields are required');
      return;
    }
    setSaving(true);

    try {
      await api.put(`songs/${id}`, song);
      toast.success('Song updated successfully.');
      navigate('/');
    } catch (error) {
      console.error('Error updating song - ', error.message);
      toast.error('Failed to update song');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <FullscreenCenter>
        <Spinner />
      </FullscreenCenter>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <TopBar>
          <GhostButton to='/'>
            <ArrowLeftIcon size={20} color='white' />
            Back to Songs
          </GhostButton>
          <OutlineButton onClick={handleDelete}>
            <Trash2Icon size={20} />
            Delete Song
          </OutlineButton>
        </TopBar>

        <Card>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSave();
            }}
          >
            <FormControl>
              <Label>Title</Label>
              <Input
                type='text'
                placeholder='Note Title'
                value={song?.title}
                onChange={e =>
                  setSong(prev =>
                    prev ? { ...prev, title: e.target.value } : prev
                  )
                }
              />
            </FormControl>

            <FormControl>
              <Label>Artist</Label>
              <Input
                type='text'
                placeholder='Note Title'
                value={song?.artist}
                onChange={e =>
                  setSong(prev =>
                    prev ? { ...prev, artist: e.target.value } : prev
                  )
                }
              />
            </FormControl>

            <FormControl>
              <Label>Album</Label>
              <Input
                type='text'
                placeholder='Note Title'
                value={song?.album}
                onChange={e =>
                  setSong(prev =>
                    prev ? { ...prev, album: e.target.value } : prev
                  )
                }
              />
            </FormControl>

            <FormControl>
              <Label>Year</Label>
              <Input
                type='text'
                placeholder='Note Title'
                value={song?.year}
                onChange={e =>
                  setSong(prev =>
                    prev ? { ...prev, year: e.target.value } : prev
                  )
                }
              />
            </FormControl>

            <CardActions>
              <PrimaryButton type='submit' disabled={saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </PrimaryButton>
            </CardActions>
          </form>
        </Card>
      </Container>
    </PageWrapper>
  );
}
