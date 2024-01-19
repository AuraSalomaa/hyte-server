//serverin käynnistys tapahtuu "npm run dev"

import  express  from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(express.static('public'))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/sivusto', express.static(path.join(__dirname, '../public')));
const items = [{ "id": 1, "name": "Item1" },
{ "id": 2, "name": "Item2" }, { "id": 3, "name": "Item3" },
{ "id": 4, "name": "Item4" }]

//yksittäiset itemsit
//TODO: palauta vain se objekti, jonka id vastaa pyydettyä

app.get('/items/:id',(req, res)=>{
  console.log('requested item id', req.params.id);
  const id  = parseInt(req.params.id)
  const oikeaid = id-1
  const item = items[oikeaid].name
  for(let i = 0; i <= items.length; i++){

      if (id === i-1){
        res.json(item)

      };
  };



});
//kaikki itemsit
app.get('/items',(req, res)=>{

  res.json(items);
});

//POST http://127.0.0.1:3000/items/
//TODO(vapaaehtoinen: lisää objekti listaan, tästä ensiviikolla enemmän)
app.post('/items', (req, res)=>{
  res.json({message: 'item created'});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
