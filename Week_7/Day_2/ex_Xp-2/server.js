// Exercise 1 : Express & JSON
let script  = require('./script');
let express  = require('express');

const app = express();

app.use('/',express.static(__dirname+'/public'));

app.get('/user', (req, res) => {
    console.log(script.user);
    res.json(script.user);
})

app.get('/user/:id',(req,res)=>{
    const id = req.params;
    console.log(req.params);
    res.json(id);
  })

app.post('/formData',(req,res)=>{
    console.log(req);
  })


app.listen(3000);


// Exercise 2 : Express & Parameters