let script  = require('./script');
let express  = require('express');

const app = express();

app.use('/pic',express.static(__dirname+'/public/pic.html'));
app.use('/form',express.static(__dirname+'/public/form.html'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/user', (req, res) => {
    console.log(script.user);
    res.json(script.user);
})

app.get('/aboutMe/:hobby',(req,res)=>{
    const hobby = req.params.hobby;
    if(typeof(hobby)== "string"){
       console.log(req.params);
       res.json(`my hobby is ${hobby}`);
    }
    else
    {
      console.log(res.status(404));
      
    }


})

app.post('/formData',(req,res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.listen(3000);


// Exercise 2 : Express & Parameters