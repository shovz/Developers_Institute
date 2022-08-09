
const express = require('express');
const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
      host: 'ec2-34-231-177-125.compute-1.amazonaws.com',
      port: 5432,
      user: 'momjliqegvhsfx',
      password: '170c4585a04f6f9459354a0e30489236c168b76ffd23fc2950865238030fe327',
      database: 'd32edgogguu9cc',
      ssl:{rejectUnauthorized:false}
    }
  })
const app = express();


app.get('/',(req,res)=>{
    db("products")
    .select("*")
    .then(res=>res.json())
    .then(data=>console.log(data))

    .catch(err=>{
        console.log(err);
    })
})


app.listen(3000,()=>{
    console.log('server is running on port 3000');
  });

