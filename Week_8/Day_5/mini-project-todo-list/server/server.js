const express = require('express');
const cors = require('cors');

// const {getTasklist} = require('./modules/tasklist.js');

const tasklist_router = require('./routes/tasklist.js');


const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000,()=>{
  console.log(`run on port 5000`);
});

app.use('/' ,tasklist_router);
