import { Router } from 'express';
import { getAll, createOne, getOne, updateOne, deleteOne } from '../controllers/index.js';
import { User } from '../models/index.js';

const userRouter = Router();

userRouter.get('/', getAll(User));
userRouter.post('/', createOne(User));
userRouter.get('/:id', getOne(User));
userRouter.put('/:id', updateOne(User));
userRouter.delete('/:id', deleteOne(User));

export default userRouter;
