import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

const Note = model('note', noteSchema);

export default Note;
