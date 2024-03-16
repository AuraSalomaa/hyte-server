import express from 'express';
import {getMe, postLogin} from '../controllers/auth-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const authRouter = express.Router();
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

// user login
authRouter.post('/login', postLogin)
  .get('/me', authenticateToken, getMe);

export default authRouter;
