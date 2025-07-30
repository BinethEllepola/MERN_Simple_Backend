const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) =>{
    let Users;

    //get all users
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    //not found
    if(!users){
        return res.status(404).json({message:"user not found"});

    }

    //Display all users
    return res.status(200).json({users});
};

//data instert
const addUsers = async(req, res, next) =>{
  const{name,gmail,age,address}=req.body;

  let users;
  try{
    users = new User({name,gmail,age,address});
    await users.save();
  }catch(err){
    console.log(err);
  }
  //not insert users
  if (!users){
    return res.status(404).send({message:"Unable to add users"});

  }
  return res.status(200).json({users});

};


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;