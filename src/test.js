//serverin käynnistys tapahtuu "npm run dev"

import  express  from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import itemRouter from './router/item-router.mjs';
import { getUserByID, getUsers, postLogin, postUser, putUser } from './controllers/user-controller.mjs';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(express.json())
app.use(express.static('public'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/sivusto', express.static(path.join(__dirname, '../public')));


//yksittäiset itemsit id:n avulla
app.use('/items',itemRouter)
//kaikki itemsit
// app.get('/items', getItems);
// // POST
// app.post('/items',postItem);
// // PUT
// app.put('/items/:id',putItem);
// // Delete
// app.delete('/items/:id', deleteItem)


//user resources
//list of users
app.get('/users',getUsers);
//get info of a user
app.get('/users/:id', getUserByID);
//user registerestion
app.post('/users', postUser)
app.post('/users/login', postLogin);
// user information update
app.put('/users/:id',putUser);





//POST http://127.0.0.1:3000/items/
//TODO(vapaaehtoinen: lisää objekti listaan, tästä ensiviikolla enemmän)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
