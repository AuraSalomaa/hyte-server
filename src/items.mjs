const items = [{ "id": 1, "name": "Item1" },
{ "id": 2, "name": "Item2" }, { "id": 3, "name": "Item3" },
{ "id": 4, "name": "Item4" }]

const getItems = (req, res)=>{

    res.json(items);

};
const getItemById=(req, res)=>{
    console.log('requested item id', req.params.id);
    const id  = parseInt(req.params.id)
    const oikeaid = id-1
    const item = items[oikeaid].name
    for(let i = 0; i <= items.length; i++){

        if (id === i-1){
            if (item);{
                res.json(item)
            };

        };
    };



  };

  const postItem = (req, res)=>{
    console.log("PostItem request body", req.body)
    if (!req.body.name){
        res.status(400).json({error: "item name missing"})

    };
    // new id: add 1 to last id number in the items array
    const newId = items[items.length - 1].id + 1
    const newitem ={id: newId, name:req.body.name}
    items.push(newitem)
    res.status(201).json({message: 'item created'});
  };

  const deleteItem = (req, res)=>{
    const index = items.findIndex(item => item.id == req.params.id);
    if(index === -1){
        return res.sendStatus(404);
    }
    const deleteItems = items.splice(index,1);
    console.log("deleteItem:", deleteItems);
    res.json({deleted_item: deleteItems[0]});
    res.sendStatus(204)
  };


  const putItem = (req, res)=>{
    const index = items.findIndex(item => item.id == req.params.id);
    // not found
    if(index === -1){
        return res.sendStatus(404);
    }
    // bad request
    if (!req.body.name){
        res.status(400).json({error: "item name missing"})

    };
    items[index].name = req.body.name;
    res.json({updated_item: items[index]})

    res.json({message: 'put placeholder'})
  };


export {getItems, getItemById, postItem, deleteItem, putItem};
