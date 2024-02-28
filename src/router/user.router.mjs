import express from 'express';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import { authenticateToken } from '../middlewares/authentication.mjs';

const userRouter = express.Router();

// /user endpoint
userRouter.route('/')
  // list users
  .get(authenticateToken, getUsers)
    // update user

  .post(postUser);

// /user/:id endpoint
userRouter.route('/:id')
  // update user
  .put(authenticateToken,putUser)
  // get info of a user
  .get(authenticateToken,getUserById)

  // delete user based on id
  .delete(authenticateToken,deleteUser);

// user login

export default userRouter;
