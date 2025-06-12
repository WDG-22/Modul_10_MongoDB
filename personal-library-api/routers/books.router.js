import { Router } from 'express';
import { getAll, createOne, getOne, updateOne, deleteOne } from '../controllers/index.js';
import { Book } from '../models/index.js';

const booksRouter = Router();

booksRouter.get('/', getAll(Book));
booksRouter.post('/', createOne(Book));
booksRouter.get('/:id', getOne(Book));
booksRouter.put('/:id', updateOne(Book));
booksRouter.delete('/:id', deleteOne(Book));

export default booksRouter;
