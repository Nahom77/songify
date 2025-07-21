const express = require('express');
const {
  getAllSongs,
  // getNote,
  createSong,
  // updateNote,
  // deleteNote,
} = require('../controllers/songsController');

const router = express.Router();

router.get('/', getAllSongs);
// router.get('/:id', getNote);
router.post('/', createSong);
// router.put('/:id', updateNote);
// router.delete('/:id', deleteNote);

module.exports = router;
