// import { DataTypes } from 'sequelize';
// import sequelize from '../db/index.js';

// const User = sequelize.define('user', {
//   firstName: {
//     type: DataTypes.STRING,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
// });

// User.sync();

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = model('user', userSchema);

export default User;
