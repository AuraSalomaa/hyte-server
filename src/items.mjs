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
    res.json({message: 'item created'});
  };

  const deleteItem = (req, res)=>{
    res.json({message: 'delete placeholder'})
  };


  const putItem = (req, res)=>{
    res.json({message: 'put placeholder'})
  };


export {getItems, getItemById, postItem, deleteItem, putItem};
