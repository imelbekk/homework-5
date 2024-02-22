import { User } from './models';
// import { Product } from './models'; 
import { connetToDB } from "./utils";

export const fetchUsers = async (q:string) => {
    const regex = new RegExp(q,"i")
  try {
    connetToDB()
    const users = await User.find({username : {$regex: regex}});
    console.log(users);
    return users
    
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchUsers)