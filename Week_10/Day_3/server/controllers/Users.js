import Users from '../models/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async(req,res) =>{
  try {
    const users = await Users.findAll({
      attributes:['id','email']
    });
    res.json(users);
  } catch (e) {
    res.json({msg:'not found'});
    console.log(e);
  }
}

export const register = async(req,res) =>{
  const {email,password} = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password,salt);
  try {
    await Users.create({
      email:email,
      password:hashPassword
    });
    res.json({msg:'Register Successful'})
  } catch (e) {
    console.log(e);
    res.status(404).json({msg:'Email already exist'})
  }
} 

export const login = async(req,res)=>{

  try {
    const user = await Users.findAll({
      where:{
        email:req.body.email
      }
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);

    if(!match) return res.status(400).json({msg:'Wrong password'});

    const userId = user[0].id;
    const email = user[0].email;

    const accessToken = jwt.sign({userId,email}, process.env.ACCESS_TOKEN_SECRET,{
      expiresIn: '30s'
    });
    res.cookie('accessToken', accessToken, {
      httpOnly:true,
      maxAge: 30 * 1000
    });

    res.json(accessToken)

  } catch (e) {
    res.status(404).json({msg:'Email not found'})
  }
}

export const logout = (req, res) => {
  console.log(req.cookie);
  const accessToken = req.cookie.accessToken;
  if(!accessToken) return res.sendStatus(204);
  res.clearCookie('accessToken');
  return res.sendStatus(200);
}
