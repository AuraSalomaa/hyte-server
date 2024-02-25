import express from 'express';
import {
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
  deleteEntry,
} from '../controllers/entry-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs'

const entryRouter = express.Router();

entryRouter.route('/')
  .get(authenticateToken, getEntries)

  .post(postEntry);

entryRouter.route('/:id')

  .get(authenticateToken,getEntryById)
  .put(putEntry)
  .delete(authenticateToken,deleteEntry);

export default entryRouter;
