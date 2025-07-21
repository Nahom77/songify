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
    const song = await Note.findById(req.params.id);

    res.status(200).json(song);
  } catch (error) {
    console.error('Error fetching one Note - ', error.message);
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

// exports.updateNote = async function (req, res) {
//   try {
//     const { title, content } = req.body;
//     const note = await Note.findByIdAndUpdate(
//       req.params.id,
//       {
//         title,
//         content,
//       },
//       { new: true }
//     );
//     if (!note) return res.status(404).json({ message: 'Note not found' });

//     res.status(200).json(note);
//   } catch (error) {
//     console.error('Error - ', error.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// exports.deleteNote = async function (req, res) {
//   try {
//     const note = await Note.findByIdAndDelete(req.params.id);

//     res.status(200).json({ message: 'Note Deleted successfully.' });
//   } catch (error) {
//     console.error('Error - ', error.message);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
