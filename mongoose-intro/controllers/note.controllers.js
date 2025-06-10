import { Note, User } from '../models/index.js';

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ data: notes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const createNote = async (req, res) => {
  const { content, userId } = req.body;
  try {
    const note = await Note.create({ content, author: userId });

    if (!note) {
      res.status(500).json({ msg: 'Creating Note failed' });
      return;
    }

    // const user = await User.findByIdAndUpdate(userId, { $push: { notes: note._id } });

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ msg: 'User not found' });
      return;
    }

    user.notes.push(note._id);
    await user.save();

    res.status(201).json({ data: note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getOneNote = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Note.findById(id).populate('author', 'firstName');
    if (!data) {
      res.status(404).json({ msg: 'Note not found' });
      return;
    }
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const updateNote = async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  try {
    // const note = await Note.findByIdAndUpdate(id, { content, $inc: {__v: 1} }, {new: true});

    const note = await Note.findById(id);
    if (!note) {
      res.status(404).json({ msg: 'Note not found' });
      return;
    }

    note.content = content;
    await note.save();

    res.json({ data: note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      res.status(404).json({ msg: 'Note not found' });
      return;
    }
    res.status(204).json({ msg: 'Note deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

export { getAllNotes, createNote, getOneNote, updateNote, deleteNote };
