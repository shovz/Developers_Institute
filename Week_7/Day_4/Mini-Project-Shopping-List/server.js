const express = require('express');

const app = express();

app.use('/',express.static(__dirname +"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/items',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
})


app.listen(3000,()=>{
    console.log('server is running on port 3000');
  });