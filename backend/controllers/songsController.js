const Song = require('../models/Song');

exports.getAllSongs = async function (req, res) {
  try {
    // console.log(express.json());
    const songs = await Song.find().sort({ createdAt: -1 });

    res.status(200).json(songs);
  } catch (error) {
    console.error('Error - ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getSong = async function (req, res) {
  try {
    const song = await Song.findById(req.params.id);

    res.status(200).json(song);
  } catch (error) {
    console.error('Error fetching one Song - ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createSong = async function (req, res) {
  try {
    const { title, artist, album, year } = req.body;
    const song = new Song({ title, artist, album, year });

    const createdSong = await song.save();
    res.status(201).json(createdSong);
  } catch (error) {
    console.error('Error - ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateSong = async function (req, res) {
  try {
    const { title, artist, album, year } = req.body;
    const song = await Song.findByIdAndUpdate(
      req.params.id,
      {
        title,
        artist,
        album,
        year,
      },
      { new: true }
    );
    if (!song) return res.status(404).json({ message: 'Song not found' });

    res.status(200).json(song);
  } catch (error) {
    console.error('Error - ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteSong = async function (req, res) {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Note Deleted successfully.' });
  } catch (error) {
    console.error('Error - ', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
