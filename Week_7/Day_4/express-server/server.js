/*
1. npm init -y - package.json
2. express - npm i express
3. nodemon- live server - dev mode
4. const express = require('express');
5. init express
6. create routes
7. knex & pg - connect to database
*/
const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
const app = express();


const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'dvdrental'
  }
})


app.use('/',express.static(__dirname+'/public'))
// to extrat the data form the body
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.listen(5000,()=>{
  console.log('server is running on port 5000');
});

app.get('/userlogin',(req,res)=>{
  console.log(req.query);
  res.json({msg:'OK GOOD',status:200})
  // res.sendFile(__dirname+'/public/login.html')
})

// app.post('/login', (req,res)=>{
//   console.log(req.body);
//   res.json({msg:'NOT OK'})
// })

app.post('/register', async (req,res)=>{
  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  saveUser(req.body.email, hashPassword)
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
    res.json({msg:'Email exist'})
  })
})

app.post('/login', async (req,res)=>{
  console.log(req.body);
  getUser(req.body.email)
  .then( async (data) => {
    console.log(data);
    if(data.length == 0){
      res.json({msg:'Email does not exist'})
    }
    else {
      console.log(data[0].password);
      const match = await bcrypt.compare(req.body.password, data[0].password);
      if(!match){
        res.json({msg:'Wrong Password'})
      }
      else{
        res.json({msg:'LOGIN OK'})
      }

    }

  })
  .catch(e=>{
    console.log(e);
  })
})

function saveUser(email,password) {
  return db('myusers')
  .insert({email:email, password:password})
  .returning('id')
}
function getUser(email) {
  return db('myusers')
  .select('id','email','password')
  .where({email:email})
}
