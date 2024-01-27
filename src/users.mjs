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

    res.send(users);

};

const getUserByID = (req, res)=>{
    const UserInformation = users.find(user => user.id == req.params.id);
    if (UserInformation){
        res.json(UserInformation);
    }
    else {
        res.status(404).json({error:'Not found'})
    }
};


const postUser = (req, res)=>{
    const userCreds = req.body;
    if (!userCreds.username || !userCreds.password || !userCreds.email){
        res.status(400).json({error: "Username, password and an email is required"})

    };
    // new id: add 1 to last id number in the items array
    const newId = users[users.length - 1].id + 1
    const newUser ={id: newId, username: userCreds.username, password: userCreds.password, email: userCreds.email }
    users.push(newUser)
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
    const UserUpdate = users.findIndex(user => user.id == req.params.id);
    if (UserUpdate === -1){
        return res.sendStatus(404).json({error:"Käyttäjää ei löytynyt"});

    };
    const userCreds = req.body
    if(!userCreds.username || !userCreds.password){
        return res.status(400).json({error:"Missing password or username"})
    }
    users[UserUpdate].username = userCreds.username
    users[UserUpdate].password = userCreds.password
    users[UserUpdate].email = userCreds.password
    res.json({updated_user: users[UserUpdate]});


};

export{getUsers, getUserByID, postUser, postLogin, putUser}
