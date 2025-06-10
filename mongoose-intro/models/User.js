import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  notes: {
    type: [Schema.Types.ObjectId],
    ref: 'note',
  },
});

const User = model('user', userSchema);

export default User;
