const express = require('express');
const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'test',
      database: 'DI_Daily'
    }
  })
const app = express();

app.use('/',express.static(__dirname +"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.sendFile(__dirname +'/public/register.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname +'/public/login.html')
})


app.post('/',(req,res)=>{
    const {fname,lname,email,username,password} = req.body;
    checkIfExists(username,password)
    .then(data=>{
        if(data.length<1){
                db('users').insert({
                    fname,
                    lname,
                    email,
                    username,
                    password
                })
                .returning ('*')
                .then (user=>{
                    res.json(user[0])
                })
                .catch (err=>{
                    console.log(err);
            })
        }     
        else{
            res.json(false)
        } 
    });

})

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    checkIfExists(username,password)
    .then(data=>{
        if(data.length==1){
            res.json(data[0]);
        }   
        else {
            res.json(false);
        }
    });

})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
  });

function checkIfExists(username,password){
    return db.select('username','password').from ('users')
    .where({username,password});
}