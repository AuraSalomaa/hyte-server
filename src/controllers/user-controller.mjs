import bcrypt from 'bcryptjs';
import {
  deleteUserById,
  insertUser,
  listAllUsers,
  selectUserById,
  updateUserById,
} from '../models/user-models.mjs';

const getUsers = async (req, res) => {
  const result = await listAllUsers();
  const token_user_id = req.user.user_id
  if (result.error) {
    return res.status(result.error).json(result);

  }
  if (token_user_id){
    return res.json(result);
  }
  else{
    res.status(401).json({message:"unauthorized"})
  }

};

const getUserById = async (req, res) => {
  const result = await selectUserById(req.params.id);
  const token_user_id = req.user.user_id;
  if (result.error) {
    return res.status(result.error).json(result);
  }
  if(token_user_id){
    return res.json(result);
  }
  else{
    res.status(401).json({message:"unauthorized"})
  }
};

const postUser = async (req, res) => {
  const {username, password, email} = req.body;
  // check that all needed fields are included in request
  if (username && password && email) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await insertUser({
      username,
      email,
      password: hashedPassword,
    });
    if (result.error) {
      return res.status(result.error).json(result);
    }
    return res.status(201).json(result);
  } else {
    return res.status(400).json({error: 400, message: 'bad request'});
  }
};

// Only user authenticated by token can update own data
const putUser = async (req, res) => {
  // Get userinfo from req.user object extracted from token
  const user_id = req.user.user_id;
  const {username, password, email} = req.body;
  // hash password if included in request
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // check that all needed fields are included in request
  if (user_id && username && password && email) {
    const result = await updateUserById({
      user_id,
      username,
      password: hashedPassword,
      email,
    });
    if (result.error) {
      return res.status(result.error).json(result);
    }
    return res.status(201).json(result);
  } else {
    return res.status(400).json({error: 400, message: 'bad request'});
  }
};

const deleteUser = async (req, res) => {
  const result = await deleteUserById(req.params.id);
  const token_user_id = req.user.user_id;
  if (result.error) {
    return res.status(result.error).json(result);
  }
  if (token_user_id){
    return res.json(result);
  }
  else{
    res.status(401).json({message:"Unauthorized"})
  }
};

export {getUsers, getUserById, postUser, putUser, deleteUser};
