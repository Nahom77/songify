const express = require('express');
const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  // deleteNote,
} = require('../controllers/songsController');

const router = express.Router();

router.get('/', getAllSongs);
router.get('/:id', getSong);
router.post('/', createSong);
router.put('/:id', updateSong);
// router.delete('/:id', deleteNote);

module.exports = router;
