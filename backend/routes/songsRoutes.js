const express = require('express');
const {
  getAllSongs,
  getSong,
  createSong,
  // updateNote,
  // deleteNote,
} = require('../controllers/songsController');

const router = express.Router();

router.get('/', getAllSongs);
router.get('/:id', getSong);
router.post('/', createSong);
// router.put('/:id', updateNote);
// router.delete('/:id', deleteNote);

module.exports = router;
