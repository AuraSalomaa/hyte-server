//serverin käynnistys tapahtuu "npm run dev"

import  express  from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { deleteItem, getItemById, getItems, postItem, putItem } from './items.mjs';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(express.static('public'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/sivusto', express.static(path.join(__dirname, '../public')));


//yksittäiset itemsit id:n avulla
app.get('/items/:id',getItemById)
//kaikki itemsit
app.get('/items', getItems);
// POST
app.post('/items',postItem);
// PUT
app.put('/items/:id',putItem);
// Delete
app.delete('/items/:id', deleteItem)





//POST http://127.0.0.1:3000/items/
//TODO(vapaaehtoinen: lisää objekti listaan, tästä ensiviikolla enemmän)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
