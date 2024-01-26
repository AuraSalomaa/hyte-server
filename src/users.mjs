const users = [
    {
      id: 1,
      username: "johndoe",
      password: "password1",
      email: "johndoe@example.com"
    },
    {
      id: 2,
      username: "janedoe",
      password: "password2",
      email: "janedoe@example.com"
    },
    {
      id: 3,
      username: "bobsmith",
      password: "password3",
      email: "bobsmith@example.com"
    }
  ];




//Todo: Implement all of these
const getUsers = (req, res)=>{

    res.send("ei");

};

const getUserByID = (req, res)=>{

    res.send("ei");
};


const postUser = (req, res)=>{
    const userCreds = req.body
    if (!userCreds.username || userCreds.password){
        res.status(400).json({error: "username or password required"})

    };
    // new id: add 1 to last id number in the items array
    const newId = items[items.length - 1].id + 1
    const newitem ={id: newId, username: userCreds.username, password: userCreds.password }
    items.push(newitem)
    res.status(201).json({message: 'User created!'});
  };



const postLogin = (req, res)=>{

    const userCreds = req.body;
    if (!userCreds.username || !userCreds.password){
        return res.sendStatus(400);
    };
    const userFound = users.find(user => user.username == userCreds.username);
    //user not found
    if (userFound.password === userCreds.password) {
        res.json({message: 'logged in successfully', user: userFound});
    } else {
        return res.status(403).json({error: 'username/password invalid'});
      }


};

const putUser = (req, res)=>{

    res.send("ei");

};

export{getUsers, getUserByID, postUser, postLogin, putUser}
