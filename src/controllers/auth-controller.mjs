import jwt from "jsonwebtoken";
import { selectUserByNameAndPassword } from "../models/user-models.mjs";
import 'dotenv/config'

const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const user = await selectUserByNameAndPassword(username, password);
    if (user.error) {
      return res.status(user.error).json(user);
    }
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
    res.json({...user, token});
    return res.json({message: 'logged in successfully', user,token});



  };
  const getMe = async (req, res) => {
    console.log('getMe', req.user);
    if (req.user) {
      res.json({message: 'token ok', user: req.user});
    } else {
      res.sendStatus(401);
    }
  };

export {postLogin, getMe};
