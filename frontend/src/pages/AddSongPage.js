import React, { useState } from 'react';
import { Button, HeaderContainer } from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const Card = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FormControl = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #d1d5db;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 0.8rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

// const Textarea = styled.textarea`
//   padding: 0.5rem 0.75rem;
//   border-radius: 0.375rem;
//   border: 1px solid rgba(255, 255, 255, 0.15);
//   background: rgba(255, 255, 255, 0.1);
//   color: #ffffff;
//   font-size: 1rem;
//   height: 8rem;
//   resize: vertical;
//   backdrop-filter: blur(8px);
//   -webkit-backdrop-filter: blur(8px);
// `;

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// const Card = styled.div`
//   width: 100%;
//   background-color: #ffffff; /* matches base-100 */
//   border-radius: 0.5rem;
//   box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
// `;

// const CardBody = styled.div`
//   padding: 1.5rem;
// `;

// const CardTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const FormControl = styled.div`
//   margin-bottom: 1rem;
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   color: #4b5563;
//   margin-bottom: 0.25rem;
// `;

// const Input = styled.input`
//   padding: 0.5rem 0.75rem;
//   border-radius: 0.375rem;
//   border: 1px solid #d1d5db;
//   font-size: 1rem;
// `;

// const Textarea = styled.textarea`
//   padding: 0.5rem 0.75rem;
//   border-radius: 0.375rem;
//   border: 1px solid #d1d5db;
//   font-size: 1rem;
//   height: 8rem;
//   resize: vertical;
// `;

// const CardActions = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const Button = styled.button`
//   background-color: #3b82f6;
//   color: white;
//   padding: 0.5rem 1rem;
//   font-weight: 500;
//   border-radius: 0.375rem;
//   border: none;
//   cursor: pointer;

//   &:disabled {
//     background-color: #93c5fd;
//     cursor: not-allowed;
//   }
// `;

export function AddSongPage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!title.trim() || !artist.trim() || !album.trim() || !year.trim()) {
      toast.error('All fields are required');
      return;
    }

    setLoading(true);
    try {
      await api.post('/songs', { title, artist, album, year });
      toast.success('Song added successfully!');
      navigate('/');
    } catch (error) {
      console.log('Error adding on song - ', error.message);
      toast.error('Failed to add song.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Button>
            <ArrowLeftIcon width='35' />
            Back
          </Button>
        </Link>
      </HeaderContainer>

      {/* Card container*/}
      <Card>
        <CardBody>
          <CardTitle>Add new Song</CardTitle>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <FormControl>
              <Label>Title</Label>
              <Input
                type='text'
                placeholder='Song Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>

            {/* Artist */}
            <FormControl>
              <Label>Artist</Label>
              <Input
                type='text'
                placeholder="Song's Artist"
                value={artist}
                onChange={e => setArtist(e.target.value)}
              />
            </FormControl>

            {/* Album */}
            <FormControl>
              <Label>Album</Label>
              <Input
                type='text'
                placeholder='Album'
                value={album}
                onChange={e => setAlbum(e.target.value)}
              />
            </FormControl>

            {/* Year */}
            <FormControl>
              <Label>Year</Label>
              <Input
                type='number'
                placeholder='Year'
                value={year}
                onChange={e => setYear(e.target.value)}
              />
            </FormControl>

            <CardActions>
              <Button type='submit' disabled={loading}>
                {loading ? 'Adding...' : 'Add Song'}
              </Button>
            </CardActions>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
