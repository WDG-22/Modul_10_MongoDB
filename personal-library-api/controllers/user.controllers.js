import { User } from '../models/index.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) throw new ErrorResponse('User not found', 404);
  res.json({ data: user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true }); // , upsert: true
  if (!user) throw new ErrorResponse('User not found', 404);
  res.json({ data: user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new ErrorResponse('User not found', 404);
  res.json({ data: user });
};

export { getAllUsers, createUser, getOneUser, updateUser, deleteUser };
