const express = require('express');
const {
  getAllSongs,
  // getNote,
  // createNote,
  // updateNote,
  // deleteNote,
} = require('../controllers/songsController');

const router = express.Router();

router.get('/', getAllSongs);
// router.get('/:id', getNote);
// router.post('/', createNote);
// router.put('/:id', updateNote);
// router.delete('/:id', deleteNote);

module.exports = router;
