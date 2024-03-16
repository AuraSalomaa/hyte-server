import express from 'express';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import { authenticateToken } from '../middlewares/authentication.mjs';
import {body} from 'express-validator';

const userRouter = express.Router();

/**
 * @api {get} /api/resource/:id Request Resource information
 * @apiName GetResource
 * @apiGroup Resource
 *
 * @apiParam {Number} id Resource unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the Resource.
 * @apiSuccess {String} lastname  Lastname of the Resource.
 */
// /user endpoint
userRouter.route('/')
  // list users
  .get(authenticateToken, getUsers)
    // update user

  .post(
    body('username').trim().isLength({min: 3, max:20}).isAlphanumeric(),
    body('password').trim().isLength({min:8, max: 128}),
    body('email').trim().isEmail(),
    postUser);

// /user/:id endpoint
userRouter.route('/:id')
  // update user
  .put(authenticateToken,putUser)
  // get info of a user
  .get(getUserById)

  // delete user based on id
  .delete(deleteUser);

// user login

export default userRouter;
