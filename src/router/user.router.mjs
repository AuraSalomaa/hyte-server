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
 * @api {get} /users Request user list
 * @apiName GetUsers
 * @apiGroup Users
 * @apiPermission token
 *
 * @apiParam {Number} id Resource unique ID.
 *
 * @apiSuccess {Array} user[] array of Users.
 * @apiSuccess {object} user User object.
 * @apiSuccess {number} user.user_id Id of the User.
 * @apiSuccess {String} user.username Username.
 * @apiSuccess {String} user.user_level Userlevel of the User .
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
